
const mongoose = require('mongoose')


const cartSchema = mongoose.Schema({
    product: {
        type: Object,
        required: true
    },
    user_id: {
        type: String,
        required: true
    }

})

const cartModel = mongoose.model('cart', cartSchema)
module.exports = cartModel