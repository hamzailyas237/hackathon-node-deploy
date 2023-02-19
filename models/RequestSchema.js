
const mongoose = require('mongoose')

const requestSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
        required: true
    },
    latitude: {
        type: String,
        required: true
    },
    longitude: {
        type: String,
        required: true
    },
    emergency_type: {
        type: String,
        required: true
    }

})

const requestModel = mongoose.model('request', requestSchema)
module.exports = requestModel