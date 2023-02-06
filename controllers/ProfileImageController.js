const userProfileModel = require("../models/UserProfileSchema")
const userModel = require("../models/UserSchema")


const userProfileImageController = {
    uploadProfileImage: (req, res) => {

        const { image, user_id } = req.body

        if (!user_id || !image) {
            res.status(400).json({
                message: 'Required fields are missing'
            })
            return
        }

        userProfileModel.create(req.body, (err, profile_data) => {
            if (err) {
                res.status(500).json({
                    message: 'Something went wrong'
                })
            }
            else {
                res.status(200).json({
                    message: 'Profile image uploaded successfully',
                    profile_data
                })
            }
        })
    },

    getUserProfileImage: (req, res) => {
        const { id } = req.params
        userProfileModel.findById(id, (err, profile_data) => {
            if (err) {
                res.status(500).json({
                    message: 'Something went wrong'
                })
            }
            else {
                res.status(200).json({
                    message: 'Get profile image',
                    profile_data
                })
            }
        })
    },

    loggedInUser: (req, res) => {
        const { id } = req.params
        userModel.findById(id, (err, user) => {
            if (err) {
                res.status(500).json({
                    message: 'Something went wrong'
                })
            }
            else {
                res.status(200).json({
                    message: 'Get user',
                    user
                })
            }
        })
    }
}
module.exports = userProfileImageController