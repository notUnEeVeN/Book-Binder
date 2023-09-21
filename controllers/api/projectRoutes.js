const router = require('express').Router();
const { Project } = require('../../models');
const withAuth = require('../../utils/auth');

// Endpoint to create a new project
router.post('/', withAuth, async (req, res) => {
  try {
    const newProject = await Project.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newProject);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Endpoint to delete a specific project by ID
router.delete('/:id', withAuth, async (req, res) => {
  try {
    const projectData = await Project.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!projectData) {
      res.status(404).json({ message: 'No project found with this id!' });
      return;
    }

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
        }
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
