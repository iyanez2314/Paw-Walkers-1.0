const {Schema, model } = ('mongoose');

const OwnerSchema = new Schema (
    {
        firstName: {
            type: String,
            required: true,
        },

        lastName: {
            type: String,
            required: true
        },

        phoneNumber: {
            type: String,
            require: true,
            unique: true,
            match: [/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/, 'Please enter a valid phone number' ]
        },

        email: {
            type: String,
            require: true,
            unique: true,
            match: [/^([a-z0-9_.-]+)@([\da-z.-]+).([a-z.]{2,6})$/, 'Please enter a valid email address']
        },

        Password: {
            type: String,
            require: true,
            match: [/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/, 'Please enter minimum eight characters, at least one uppercase letter, one lowercase letter and one number']
        },
    }
)

const ownerModel = model('User', OwnerSchema);

module.exports = ownerModel