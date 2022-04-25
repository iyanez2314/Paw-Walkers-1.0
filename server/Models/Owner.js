const {Schema, model } = require('mongoose');



const OwnerSchema = new Schema (
    {
        firstName: {
            type: String,
            required: true
        },

        lastName: {
            type: String,
            required: true
        },

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

        phoneNumber: {
            type: String,
            required: true,
            unique: true,
            match: [/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/, 'Please enter a valid phone number' ]
        },

        password: {
            type: String,
            required: true,
            // match: [/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/, 'Please enter minimum eight characters, at least one uppercase letter, one lowercase letter and one number']
        },
     }
);


const owner = model('Owner', OwnerSchema);

module.exports = owner;