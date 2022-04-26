const { owner } = require('../models')

const ownerControllers = {
    // Get all users
    getAllOwner(req, res) {
        owner.find({})
        .populate({
            path: 'Dog',
            select: '-__v'
        })
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err);
            res.status(400).json(err)
        });
    },

    // Creating a user 
    createOwner({ body }, res) {
        owner.create(body)
        .then(dbUserData => res.json(dbUserData));
    },

    // Update a user
    updateOwner({ params, body }, res) {
        owner.findOneAndUpdate({ _id: params.id }, body, { new: true})
        .then(dbUserData => {
            if(!dbUserData){
                res.status(400).json({ message: 'No user found with this id!' });
                return;
            }
            res.json(dbUserData)
        })
        .catch(err => {
            console.log(err)
            res.status(400).json(err)
        })
    },

    // delete user 
    deleteOwner({ params }, res) {
        owner.findOneAndDelete({ _id: params.id })
        .then(dbUserData => {
            if(!dbUserData){
                res.status(404).json({ message: 'No user found with this id!' })
                return;
            }
            res.json(dbUserData)
        })
        .catch(err => res.status(400).json(err));
    }
}

module.exports = ownerControllers;