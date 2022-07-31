const router = require('express').Router();

const apiRoutes = require('./api-routes');
router.use('/api', apiRoutes);

const homeRoutes = require('./home-routes');
router.use('/', homeRoutes);

const habitViewRoutes = require('./habitview-routes');
router.use('/my-habits', habitViewRoutes);

router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;