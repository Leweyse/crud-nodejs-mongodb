const { Schema, model } = require('mongoose');

const InfinitiefSchema = new Schema({
    wInfinitief: {
        type: String,
        required: true
    },
    wSpaans: {
        type: String,
        required:true
    },
    ik_ver: {
        type: String,
        required:true
    },
    jij_ver: {
        type: String,
        required:true
    },
    u_ver: {
        type: String,
        required:true
    },
    hij_zij_ze_ver: {
        type: String,
        required:true
    },
    wij_we_ver: {
        type: String,
        required:true
    },
    jullie_ver: {
        type: String,
        required:true
    },
    zij_ze_ver: {
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

module.exports = model('Infinitief', InfinitiefSchema, 'infinitief');
