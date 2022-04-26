const router = require('express').Router();
const ownerRoutes = require('./Owner-routes');
const dogWalkerRoutes = require('./Dog-walker-routes');
const dogRoutes = require('./Dog-routes');

router.use('/dogwalkers', dogWalkerRoutes);
router.use('/owners', ownerRoutes);
router.use('/dog', dogRoutes)


module.exports = router;