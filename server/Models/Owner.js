const {Schema, model, Types } = require('mongoose');
const bcrypt = require('bcrypt');



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
            match: [/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/, 'Please enter minimum eight characters, at least one uppercase letter, one lowercase letter and one number']
        },

        dogsOwned: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Dog'
            }
        ]
     }
);

OwnerSchema.pre('save', async function(next) {
    if(this.isNew || this.isModified('password')){
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }
    next();
});

OwnerSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
};

const owner = model('Owner', OwnerSchema);

module.exports = owner;