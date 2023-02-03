const productModel = require("../models/ProductSchema")

const productController = {
    products: (req, res) => {
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
                    message: 'product created successfully',
                    product
                })
            }
        })



    }
}
module.exports = productController