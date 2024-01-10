const { Schema, model } = require('mongoose');

const UsersSchema = Schema(
    {
        name: {
            type: String
        },
        lastname: {
            type: String
        },
        phone: {
            type: String
        },
        email: {
            type: String
        },
        ative: {
            
        }
    },
    {versionKey: false}
);

module.exports = model('User', UsersSchema);