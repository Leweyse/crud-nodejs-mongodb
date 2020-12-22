const { Schema, model } = require('mongoose');

const UitdrukkingenSchema = new Schema({
    uVlaams: {
        type: String,
        required: true
    },
    uSpaans: {
        type: String,
        required:true
    },
    user: {
        type: String,
        required: true
    },
}, {
    timestamps: true
})

module.exports = model('Uitdrukkingen', UitdrukkingenSchema, 'uitdrukkingen');
