
const mongoose = require('mongoose')


const wishlistSchema = mongoose.Schema({
    product: {
        type: Object,
        required: true
    },
    user_id: {
        type: String,
        required: true
    }

})

const wishlistModel = mongoose.model('wishlist', wishlistSchema)
module.exports = wishlistModel