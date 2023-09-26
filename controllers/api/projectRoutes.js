// Endpoint to update a specific project by ID (with image)
router.put('/:id', withAuth, upload.single('image'), async (req, res) => {
  try {
    // Check if an image file was uploaded
    if (req.file) {
      // Access the uploaded file's filename using req.file
      const { filename } = req.file;

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

      // Extract the old filename from the coverImageUrl
      const oldFilename = projectData.coverImageUrl.split('/').pop();

      // Delete the old image file from the server's filesystem
      const oldImagePath = path.join(
        __dirname,
        '..',
        '..',
        'public',
        'uploads',
        oldFilename
      );

      // Check if the old file exists before attempting to delete it
      if (fs.existsSync(oldImagePath)) {
        fs.unlinkSync(oldImagePath);
      }

      // Update the project data with the new image URL
      projectData.coverImageUrl = `uploads/${filename}`;
      await projectData.save(); // Save the updated project data

      res.status(200).json(projectData);
    } else {
      // If no new image was uploaded, update only the project details
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
    }
  } catch (err) {
    res.status(500).json(err);
  }
});
