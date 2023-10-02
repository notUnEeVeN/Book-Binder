// Import necessary modules and dependencies
const router = require('express').Router();
const { Project } = require('../../models');
const withAuth = require('../../utils/auth');
const cloudinary = require('../../config/cloudinaryConfig'); // Import Cloudinary configuration

// Middleware for Cloudinary upload
const upload = cloudinary.uploader.upload;

// Endpoint to create a new project with image upload
router.post('/uploads', withAuth, async (req, res) => {
  try {
    // Access the uploaded file using Cloudinary upload middleware
    const cloudinaryResponse = await upload(req.files.image.tempFilePath, {
      folder: 'uploads', // Set the folder in Cloudinary where you want to store uploads
    });

    // Extract the public URL of the uploaded image from Cloudinary response
    const coverImageUrl = cloudinaryResponse.secure_url;

    const newProject = await Project.create({
      name: req.body.name,
      description: req.body.description,
      user_id: req.session.user_id,
      coverImageUrl: coverImageUrl, // Set the cover image URL
    });

    res.status(200).json(newProject);
  } catch (err) {
    console.error(err);
    res.status(400).json(err);
  }
});

// Endpoint to update a specific project by ID (with image)
router.put('/:id', withAuth, async (req, res) => {
  try {
    // Check if an image file was uploaded
    if (req.files && req.files.image) {
      // Access the uploaded file using Cloudinary upload middleware
      const cloudinaryResponse = await upload(req.files.image.tempFilePath, {
        folder: 'uploads', // Set the folder in Cloudinary where you want to store uploads
      });

      // Extract the public URL of the uploaded image from Cloudinary response
      const coverImageUrl = cloudinaryResponse.secure_url;

      // Fetch the project data from the database
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

      // Update the project data with the new image URL
      projectData.coverImageUrl = coverImageUrl;
      await projectData.save(); // Save the updated project data

      res.status(200).json(projectData);
    } else {
      // If no new image was uploaded, update only the project details
      const [_, updatedProjectData] = await Project.update(
        {
          name: req.body.name, // Updating the project name
          description: req.body.description,
        },
        {
          returning: true,
          where: {
            id: req.params.id,
            user_id: req.session.user_id,
          },
        }
      );

      if (!updatedProjectData || updatedProjectData.length === 0) {
        res.status(404).json({ message: 'No project found with this id!' });
        return;
      }

      res.status(200).json(updatedProjectData[0]);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

module.exports = router;
