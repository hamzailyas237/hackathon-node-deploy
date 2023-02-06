

const router = require('express').Router()
const { signup, login } = require('../controllers/AuthController')
const { createProducts, getProducts, updateProducts, deleteProducts } = require('../controllers/ProductController')
const { uploadProfileImage, getUserProfileImage,loggedInUser } = require('../controllers/ProfileImageController')
const { authMiddleware } = require('../middlewares/AuthMiddleware')


router.post('/signup', signup)
router.post('/login', login)
router.post('/products', authMiddleware, createProducts)
router.get('/products', getProducts)
router.put('/products', authMiddleware, updateProducts)
router.delete('/products/:id', authMiddleware, deleteProducts)
router.post('/profile', authMiddleware, uploadProfileImage)
router.get('/profile/:id', getUserProfileImage)
router.get('/user/:id', loggedInUser)

module.exports = router