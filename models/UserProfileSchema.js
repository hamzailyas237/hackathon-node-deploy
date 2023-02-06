

const mongoose = require('mongoose')

const userProfileSchema = mongoose.Schema({
    image: {
        type: String,
        required: true
    },
    user_id: {
        type: String,
        required: true
    }
})

const userProfileModel = mongoose.model('user profile', userProfileSchema)
module.exports = userProfileModel