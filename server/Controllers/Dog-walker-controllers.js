 const { dogWalker } = require('../models');

 const dogWalkerControllers = {
     // get all dog walkers
     getAllWalkers(req, res) {
         dogWalker.find({})
         .then(dbDogWalkerdata => res.json(dbDogWalkerdata))
         .catch(err => {
             console.log(err);
             res.status(400).json(err)
         });
     },

     // Creating a dog walker
     createDogWalker({ body }, res) {
         dogWalker.create(body)
         .then(dbDogWalkerdata => res.json(dbDogWalkerdata))
     },

     // update a dog walker info
     updateDogWalker({ params, body }, res) {
         dogWalker.findOneAndUpdate({ _id: params.id }, body, { new: true})
         .then(dbDogWalkerdata => {
             if(!dbDogWalkerdata){
                 res.status(400).json({ message: 'No walker found with this id' })
                 return;
             }
             res.json(dbDogWalkerdata)
         })
         .catch(err => {
             console.log(err)
             res.status(400).json(err)
         })
     },

     // Deleting a dog walker
     deleteDogWalker({ params }, res) {
         dogWalker.findOneAndDelete({ _id: params.id })
         .then(dbDogWalkerdata => {
             if(!dbDogWalkerdata){
                 res.status(400).json({ message: 'No dog walker found with this id' })
                 return;
             }
             res.json(dbDogWalkerdata)
         })
         .catch(err => res.status(400).json(err));
     }

 }

 module.exports = dogWalkerControllers;