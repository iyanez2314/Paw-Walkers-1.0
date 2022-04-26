const router = require('express').Router();
const {
    getAllDogs,
    getDogById,
    createDog,
    deleteDog
} = require('../../Controllers/Dog-controllers')

router 
    .route('/')
    .get(getAllDogs)
    .post(createDog)

router
    .route('/:id')
    .delete(deleteDog)
    .get(getDogById);

module.exports = router;