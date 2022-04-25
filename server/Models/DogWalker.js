const {Schema, model} = require('mongoose');
const bcrypt = require('bcrypt');

const dogwalkerSchema = new Schema (
    {
        firstName: {
            type: String,
            required: true
        },

        lastName: {
            type: String,
            required: true
        },

        phoneNumber: {
            type: String,
            required: true,
            unique: true,
            match: [/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/, 'Please enter a valid phone number' ]
        },

        email: {
            type: String,
            required: true,
            unique: true,
            match: [/^([a-z0-9_.-]+)@([\da-z.-]+).([a-z.]{2,6})$/, 'Please enter a valid email address']
        },

        Password: {
            type: String,
            required: true,
            // match: [/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/, 'Please enter minimum eight characters, at least one uppercase letter, one lowercase letter and one number']
        },
    }
)

// dogwalkerSchema.pre('save', async function(next) {
//     if(this.isNew || this.isModified('password')){
//         const saltRounds = 10;
//         this.password = await bcrypt.hash(this.password, saltRounds);
//     }
//     next();
// });

// dogwalkerSchema.methods.isCorrectPassword = async function (password) {
//     return bcrypt.compare(password, this.password);
// };

const dogwalkerModel = model('dogWalkers', dogwalkerSchema);
module.exports = dogwalkerModel