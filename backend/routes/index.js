const router = require('express').Router();
const { getAllProducts, orderProduct } = require('../controllers/productsController');

router.get('/products', getAllProducts);
router.post('/order', orderProduct);

module.exports = router;