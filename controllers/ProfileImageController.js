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


        userProfileModel.findOne({ user_id }, (err, profile_data) => {
            if (err) {
                console.log('err', err);
                res.status(500).json({
                    message: 'Something went wrong'
                })
            }
            else {
                if (profile_data) {
                    userProfileModel.findByIdAndUpdate(profile_data._id, req.body, { new: true }, (err, updated_image) => {
                        if (err) {
                            res.status(500).json({
                                message: 'Something went wrong'
                            })
                        }
                        else {
                            console.log('updated_image', updated_image);
                            res.status(200).json({
                                message: 'Profile image updated successfully',
                                updated_image
                            })
                        }
                    })
                }
                else {
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
                }
            }
        })

    },

    getUserProfileImage: (req, res) => {
        const { user_id } = req.params
        userProfileModel.findOne({ user_id }, (err, profile_data) => {
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