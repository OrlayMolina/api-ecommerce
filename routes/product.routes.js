const { Router } = require('express');
const { productsGet, productsPost, productsPut, productsDelete } = require('../controllers/product.controller.js');

const router = Router();
const guardToke = require('../middleware/auth.middleware.js');

router.get('/api/products', productsGet);
router.post('/api/products', guardToke, productsPost);
router.put('/api/products', productsPut);
router.delete('/api/products', productsDelete);

module.exports = router;