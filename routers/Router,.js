

const router = require('express').Router()
const { signup, login } = require('../controllers/AuthController')
const { createProducts, getProducts, updateProducts, deleteProducts, addToWishlist, getWishlistProducts, removeFromWishlist, addToCart, removeFromCart, getCartProducts } = require('../controllers/ProductController')
const { uploadProfileImage, getUserProfileImage, loggedInUser } = require('../controllers/ProfileImageController')
const { createEmergencyRequest, getEmergencyRequest, removeRequest } = require('../controllers/RequestController')
const { authMiddleware } = require('../middlewares/AuthMiddleware')


router.post('/signup', signup)
router.post('/login', login)
router.post('/products', authMiddleware, createProducts)
router.get('/products', getProducts)
router.put('/products', authMiddleware, updateProducts)
router.delete('/products/:id', authMiddleware, deleteProducts)
router.post('/profile', authMiddleware, uploadProfileImage)
router.get('/profile/:user_id', authMiddleware, getUserProfileImage)
router.get('/user/:id', authMiddleware, loggedInUser)
router.post('/wishlist', authMiddleware, addToWishlist)
router.get('/wishlist/:user_id', authMiddleware, getWishlistProducts)
router.delete('/wishlist/:id', removeFromWishlist)
router.post('/cart', authMiddleware, addToCart)
router.delete('/cart/:id', authMiddleware, removeFromCart)
router.get('/cart/:user_id', authMiddleware, getCartProducts)

router.post('/request', authMiddleware, createEmergencyRequest)
router.get('/request', authMiddleware, getEmergencyRequest)
router.delete('/request/:id', authMiddleware, removeRequest)



module.exports = router