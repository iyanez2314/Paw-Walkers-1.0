const { Schema, model } = require('mongoose');


const DogSchema = new Schema (
    {
        name: {
            type: String,
            required: true
        },

        breed: {
            type: String,
            required: true
        },

        age: {
            type: Number
        }
    }
)

const Dog = model('Dog', DogSchema);
module.exports = Dog