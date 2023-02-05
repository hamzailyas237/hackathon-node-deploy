

const router = require('express').Router()
const { signup, login } = require('../controllers/AuthController')
const { createProducts, getProducts, updateProducts, deleteProducts } = require('../controllers/ProductController')
const { authMiddleware } = require('../middlewares/AuthMiddleware')


router.post('/signup', signup)
router.post('/login', login)
router.post('/products', authMiddleware, createProducts)
router.get('/products', getProducts)
router.put('/products', authMiddleware, updateProducts)
router.delete('/products/:id', authMiddleware, deleteProducts)
module.exports = router