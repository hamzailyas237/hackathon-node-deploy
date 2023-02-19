const requestModel = require("../models/RequestSchema")


const requestController = {
    emergencyRequest: (req, res) => {
        const { name, email, phone, latitude, longitude } = req.body
        if (!name || !email || !phone || !latitude || !longitude) {
            res.status(400).json({
                message: 'Required fields are missing'
            })
            return
        }

        requestModel.create(req.body, (err, request) => {
            if (err) {
                res.status(500).json({
                    message: 'Something went wrong'
                })
            }
            else {
                res.status(200).json({
                    message: 'Emergency request created successfully',
                    request
                })
            }
        })
    }
}
module.exports = requestController