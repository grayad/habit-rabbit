const router = require('express').Router();

const userRoutes = require('./user-routes.js');
router.use('/users', userRoutes);

const habitRoutes = require('./habit-routes.js');
router.use('/habits', habitRoutes);

module.exports = router;