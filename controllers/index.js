const router = require('express').Router();

const apiRoutes = require('./api-routes');
router.use('/api', apiRoutes);

const htmlRoutes = require('./html-routes');
router.use('/', htmlRoutes);

router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;