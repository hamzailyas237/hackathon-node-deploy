
const bcrypt = require('bcrypt')
const userModel = require('../models/UserSchema')
const jwt = require('jsonwebtoken')

const authControllers = {
    signup: async (req, res) => {
        const { name, email, phone, password } = req.body
        if (!name || !email || !phone || !password) {
            res.status(400).json({
                message: 'Required fields are missing'
            })
            return
        }

        const hashPassword = await bcrypt.hash(password, 10)
        const signupUser = {
            ...req.body,
            password: hashPassword
        }

        userModel.findOne({ email }, (err, searchedUser) => {
            if (err) {
                res.status(500).json({
                    message: 'Something went wrong'
                })
            }
            else {
                if (searchedUser) {
                    res.status(400).json({
                        message: 'This email is already in use'
                    })
                }
                else {
                    userModel.create(signupUser, (err, signedUpUser) => {
                        if (err) {
                            res.status(500).json({
                                message: 'Something went wrong'
                            })
                        }
                        else {
                            res.status(200).json({
                                message: 'user created successfully',
                                user: signedUpUser
                            })
                        }
                    })
                }
            }
        })
    },

    login: (req, res) => {
        const { email, password } = req.body
        if (!email || !password) {
            res.status(400).json({
                message: 'Required fields are missing'
            })
            return
        }


        userModel.findOne({ email }, async (err, searchedUser) => {
            if (err) {
                res.status(500).json({
                    message: 'Something went wrong'
                })
            }
            else {
                if (searchedUser) {
                    const isPasswordMatch = await bcrypt.compare(password, searchedUser.password)

                    if (isPasswordMatch) {
                        const token = jwt.sign({ searchedUser }, process.env.JWT_KEY)
                        res.status(200).json({
                            message: 'user logged in',
                            user: searchedUser,
                            token
                        })
                    }
                    else {
                        res.status(400).json({
                            message: 'email or password is incorrect'
                        })
                    }
                }
                else {
                    res.status(400).json({
                        message: 'email or password is incorrect'
                    })
                }
            }
        })


    }
}
module.exports = authControllers