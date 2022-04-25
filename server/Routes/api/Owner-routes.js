const router = require('express').Router();
const {
    getAllOwner,
    createOwner,
    updateOwner,
    deleteOwner
} = require('../../Controllers/Owner-controllers')

router
    .route('/')
    .get(getAllOwner)
    .post(createOwner)


router
    .route('/:id')
    .put(updateOwner)
    .delete(deleteOwner)

module.exports = router;