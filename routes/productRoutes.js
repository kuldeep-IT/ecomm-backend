const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const { validateProduct, validateProductId } = require('../middlewares/validatorMiddleware');
const errorHandler = require('../middlewares/errorHandlerMiddleware');

router.get('/', productController.getAllProducts);
router.get('/:id', validateProductId, productController.getProductById);
router.post('/', validateProduct, productController.createProduct);
router.put('/:id', validateProductId, validateProduct, productController.updateProduct);
router.delete('/:id', validateProductId, productController.deleteProduct);

// Error handling middleware
router.use(errorHandler);

module.exports = router;
