const { body, param } = require('express-validator');

exports.validateCombo = [
    body('product1')
        .notEmpty().withMessage('Product1 is required')
        .isMongoId().withMessage('Product1 must be a valid Mongo ID'),
    body('product2')
        .notEmpty().withMessage('Product2 is required')
        .isMongoId().withMessage('Product2 must be a valid Mongo ID'),
    body('comboPrice')
        .notEmpty().withMessage('Combo price is required')
        .isFloat({ gt: 0 }).withMessage('Combo price must be a positive number')
];

exports.validateProduct = [
    body('name').notEmpty().withMessage('Name is required'),
    body('description').notEmpty().withMessage('Description is required'),
    body('mainPrice').isFloat({ gt: 0 }).withMessage('Main Price must be a positive number'),
    body('discountedPrice').isFloat({ gt: 0 }).withMessage('Discounted Price must be a positive number'),
    body('imageUrl').isURL().withMessage('Image URL must be a valid URL')
];

exports.validateProductId = [
    param('id').isMongoId().withMessage('Invalid product ID')
];