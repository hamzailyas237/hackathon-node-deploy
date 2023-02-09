const { mongoose } = require("mongoose")
const cartModel = require("../models/CartSchema")
const productModel = require("../models/ProductSchema")
const wishlistModel = require("../models/WishlistSchema")

const productController = {
    createProducts: (req, res) => {
        const { title, description, price, category, image } = req.body

        if (!title || !description || !price || !category || !image) {
            res.status(400).json({
                message: 'Required fields are missing'
            })
            return
        }

        productModel.create(req.body, (err, product) => {
            if (err) {
                res.status(500).json({
                    message: 'Something went wrong'
                })
            }
            else {
                res.status(200).json({
                    message: 'Product created successfully',
                    product
                })
            }
        })
    },

    getProducts: (req, res) => {
        productModel.find({}, (err, products) => {
            if (err) {
                res.status(500).json({
                    message: 'Something went wrong'
                })
            }
            else {
                res.status(200).json({
                    message: 'Get Products',
                    products
                })
            }
        })
    },

    updateProducts: (req, res) => {
        productModel.findByIdAndUpdate(req.body.id, req.body, { new: true }, (err, updatedProduct) => {
            if (err) {
                res.status(500).json({
                    message: 'Something went wrong'
                })
            }
            else {
                res.status(200).json({
                    message: 'Product Updated Successfully',
                    updatedProduct
                })
            }
        })
    },

    deleteProducts: (req, res) => {
        productModel.findByIdAndDelete(req.params.id, (err, deletedProduct) => {
            if (err) {
                res.status(500).json({
                    message: 'Something went wrong'
                })
            }
            else {
                res.status(200).json({
                    message: 'Product deleted',
                    deletedProduct
                })
            }
        })
    },

    addToWishlist: (req, res) => {
        const { product } = req.body
        // mongoose.Types.ObjectId(id)

        wishlistModel.create(req.body, (err, product) => {
            if (err) {
                res.status(500).json({
                    message: 'Something went wrong'
                })
            }
            else {
                if (product) {
                    res.status(200).json({
                        message: 'Product added to wishlist',
                        product
                    })
                }
                else {
                    res.status(500).json({
                        message: 'Something went wrong'
                    })
                }
            }
        })

        // wishlistModel.findOne({ _id }, (err, product) => {
        //     console.log(product);
        //     if (err) {
        //         res.status(500).json({
        //             message: 'Something went wrong...'
        //         })
        //     }
        //     else {
        //         if (product) {
        //             res.status(400).json({
        //                 message: 'Item already in wishlist'
        //             })

        //         }
        //         else {
        //             wishlistModel.create(req.body, (err, product) => {
        //                 if (err) {
        //                     res.status(500).json({
        //                         message: 'Something went wrong'
        //                     })
        //                 }
        //                 else {
        //                     res.status(200).json({
        //                         message: 'Product added to wishlist',
        //                         wishlisht_productt: product
        //                     })
        //                 }
        //             })
        //         }
        //     }
        // })

    },

    getWishlistProducts: (req, res) => {
        const { user_id } = req.params

        wishlistModel.find({ user_id }, (err, data) => {
            if (err) {
                res.status(500).json({
                    message: 'Something went wrong'
                })
            }
            else {
                if (data) {
                    res.status(200).json({
                        message: 'Get wishlist product',
                        wishlist_products: data
                    })
                }
                else {
                    res.status(500).json({
                        message: 'Something went wrong'
                    })
                }
            }
        })
    },

    removeFromWishlist: (req, res) => {
        wishlistModel.findByIdAndDelete(req.params.id, (err, deleted_product) => {
            if (err) {
                res.status(500).json({
                    message: 'Something went wrong'
                })
            }
            else {
                res.status(200).json({
                    message: 'Product removed from wishlist',
                    deleted_product
                })
            }
        })
    },

    addToCart: (req, res) => {
        const { product } = req.body
        // mongoose.Types.ObjectId(id)

        cartModel.create(req.body, (err, product) => {
            if (err) {
                res.status(500).json({
                    message: 'Something went wrong'
                })
            }
            else {
                if (product) {
                    res.status(200).json({
                        message: 'Product added to cart',
                        product
                    })
                }
                else {
                    res.status(500).json({
                        message: 'Something went wrong'
                    })
                }
            }
        })
    },

    removeFromCart: (req, res) => {
        cartModel.findByIdAndDelete(req.params.id, (err, deleted_product) => {
            if (err) {
                res.status(500).json({
                    message: 'Something went wrong'
                })
            }
            else {
                res.status(200).json({
                    message: 'Product removed from cart',
                    deleted_product
                })
            }
        })
    },

    getCartProducts: (req, res) => {
        const { user_id } = req.params
        console.log(user_id);
        cartModel.find({ user_id }, (err, data) => {
            if (err) {
                res.status(500).json({
                    message: 'Something went wrong'
                })
            }
            else {
                if (data) {
                    res.status(200).json({
                        message: 'Get cart product',
                        cart_products: data
                    })
                }
                else {
                    res.status(500).json({
                        message: 'Something went wrong'
                    })
                }
            }
        })
    },
}
module.exports = productController