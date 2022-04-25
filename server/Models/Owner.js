const {Schema, model } = require('mongoose');



const OwnerSchema = new Schema (
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true
        },
        email: {
            type: String,
            unique: true,
            required: true,
            match: [/^([a-z0-9_.-]+)@([\da-z.-]+).([a-z.]{2,6})$/, 'Please enter a valid e-mail address']
        },
     }
);


const owner = model('Owner', OwnerSchema);

module.exports = owner;