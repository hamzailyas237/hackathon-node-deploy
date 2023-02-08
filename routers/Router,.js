

const router = require('express').Router()
const { signup, login } = require('../controllers/AuthController')
const { createProducts, getProducts, updateProducts, deleteProducts, addToWishlist, getWishlistProducts, removeFromWishlist } = require('../controllers/ProductController')
const { uploadProfileImage, getUserProfileImage, loggedInUser } = require('../controllers/ProfileImageController')
const { authMiddleware } = require('../middlewares/AuthMiddleware')


router.post('/signup', signup)
router.post('/login', login)
router.post('/products', authMiddleware, createProducts)
router.get('/products', getProducts)
router.put('/products', authMiddleware, updateProducts)
router.delete('/products/:id', authMiddleware, deleteProducts)
router.post('/profile', authMiddleware, uploadProfileImage)
router.get('/profile/:user_id', getUserProfileImage)
router.get('/user/:id', loggedInUser)
router.post('/wishlist', authMiddleware, addToWishlist)
router.get('/wishlist/:user_id', getWishlistProducts)
router.delete('/wishlist', removeFromWishlist)

module.exports = router