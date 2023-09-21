const router = require('express').Router();
const userRoutes = require('./userRoutes');
const projectRoutes = require('./projectRoutes');

// Register API route handlers for users, projects, and comments
router.use('/users', userRoutes);
router.use('/projects', projectRoutes);

module.exports = router;
