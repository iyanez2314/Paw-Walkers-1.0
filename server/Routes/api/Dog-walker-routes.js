const router = require('express').Router();

const {
    getAllWalkers,
    createDogWalker,
    updateDogWalker,
    deleteDogWalker
} = require ('../../Controllers/Dog-walker-controllers');

router
    .route('/')
    .get(getAllWalkers)
    .post(createDogWalker)

router
    .route('/:id')
    .put(updateDogWalker)
    .delete(deleteDogWalker)

module.exports = router