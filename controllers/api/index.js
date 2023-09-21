const router = require('express').Router();
const userRoutes = require('./userRoutes');
const projectRoutes = require('./projectRoutes');
const commentRoutes = require('./commentRoutes');

// Register API route handlers for users, projects, and comments
router.use('/users', userRoutes);
router.use('/projects', projectRoutes);
router.use('/comments', commentRoutes);

module.exports = router;
