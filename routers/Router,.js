

const router = require('express').Router()
const { signup, login } = require('../controllers/AuthController')
const { createProducts, getProducts } = require('../controllers/ProductController')
const { authMiddleware } = require('../middlewares/AuthMiddleware')


router.post('/signup', signup)
router.post('/login', login)
router.post('/products', authMiddleware, createProducts)
router.get('/products', getProducts)
module.exports = router