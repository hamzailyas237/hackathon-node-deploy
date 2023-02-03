

const router = require('express').Router()
const { signup, login } = require('../controllers/AuthController')
const { products } = require('../controllers/ProductController')
const { authMiddleware } = require('../middlewares/AuthMiddleware')


router.post('/signup', signup)
router.post('/login', login)
router.post('/products', authMiddleware, products)

module.exports = router