const router = require('express').Router();
const ownerRoutes = require('./Owner-routes');
const dogWalkerRoutes = require('./Dog-walker-routes');

router.use('/dogwalkers', dogWalkerRoutes);
router.use('/owners', ownerRoutes);

module.exports = router;