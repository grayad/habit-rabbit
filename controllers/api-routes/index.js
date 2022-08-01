const router = require('express').Router();

const userRoutes = require('./user-routes.js');
router.use('/users', userRoutes);

const habitRoutes = require('./habit-routes.js');
router.use('/habits', habitRoutes);

const countRoutes = require('./counts-routes.js');
router.use('/counts', countRoutes);

module.exports = router;