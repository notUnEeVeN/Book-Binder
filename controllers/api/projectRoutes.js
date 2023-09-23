const multer = require('multer');
const path = require('path');
const fs = require('fs'); // Import the 'fs' module for file system operations
const { v4: uuidv4 } = require('uuid');
const router = require('express').Router();
const { Project } = require('../../models');
const withAuth = require('../../utils/auth');

// Define the storage location and file naming strategy for Multer
const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, 'public/uploads');
  },
  filename: (req, file, callback) => {
    const extension = path.extname(file.originalname);

    // Check if the file with the same name exists in the directory
    const filePath = path.join('public/uploads', file.originalname);
    if (fs.existsSync(filePath)) {
      // File with the same name exists, generate a unique filename
      const uniqueFilename = uuidv4() + '-' + extension;
      callback(null, uniqueFilename);
    } else {
      // File with the same name does not exist, use the original name
      callback(null, file.originalname);
    }
  },
});

// Middleware that will contain the Multer upload configuration
// It directly assigns the Multer configuration with the 'storage' option to the 'upload' variable
const upload = multer({ storage: storage });

// Endpoint to create a new project with image upload
router.post('/upload', withAuth, upload.single('image'), async (req, res) => {
  try {
    // Access the uploaded file's filename using req.file
    const { filename } = req.file;
    console.log(filename);
    const newProject = await Project.create({
      ...req.body,
      user_id: req.session.user_id,
      coverImageUrl: `uploads/${filename}`, // Set the cover image URL
    });

    res.status(200).json(newProject);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Endpoint to delete a specific project by ID
router.delete('/:id', withAuth, async (req, res) => {
  try {
    // Fetch the project data, including the coverImageUrl, from the database
    const projectData = await Project.findOne({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!projectData) {
      res.status(404).json({ message: 'No project found with this id!' });
      return;
    }

    // Extract the filename from the coverImageUrl
    const filename = projectData.coverImageUrl.split('/').pop();

    // Delete the image file from the server's filesystem
    const imagePath = path.join(
      __dirname,
      '..',
      '..',
      'public',
      'uploads',
      filename
    );

    // Check if the file exists before attempting to delete it
    if (fs.existsSync(imagePath)) {
      fs.unlinkSync(imagePath);
    }

    // Delete the project data from the database
    await Project.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    res.status(200).json(projectData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Endpoint to update a specific project by ID
router.put('/:id', withAuth, async (req, res) => {
  try {
    const projectData = await Project.update(
      {
        name: req.body.name,
        description: req.body.description,
      },
      {
        where: {
          id: req.params.id,
          user_id: req.session.user_id,
        },
      }
    );

    if (!projectData) {
      res.status(404).json({ message: 'No project found with this id!' });
      return;
    }

    res.status(200).json(projectData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
