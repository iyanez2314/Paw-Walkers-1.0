const { dog } = require('../models');


const dogControllers = {
    // look for all dogs 
    getAllDogs(req, res) {
        dog.find({})
        .then(dbDogData => res.json(dbDogData))
        .catch(err => {
            console.log(err);
            res.status(400).json(err)
        })
    },


    // look for a sepcific dog
    getDogById({ params }, res){
        dog.findOne({ _id: params.id })
        .then(dbDogData => {
            if(!dbDogData){
                res.status(400).json({ message: 'No dog found with this id' })
                return;
            }
            res.json(dbDogData);
        })
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        })
    },

    // create dog
    createDog({ body }, res) {
       dog.create(body)
       .then(dbDogData => res.json(dbDogData)) 
    },

    // delete dog 

    deleteDog({ params }, res) {
    dog.findOneAndDelete({ _id: params.id })
    .then(dbDogData => {
        if(!dbDogData){
            res.status(400).json({ message: 'No dog found with this id!' })
            return;
        }
        res.json(dbDogData)
    })
    .catch(err => res.status(400).json(err))
    }
}

module.exports = dogControllers;