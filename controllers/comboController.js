const Combo = require('../models/Combo');
const { validationResult } = require('express-validator');

exports.getAllCombos = async (req, res, next) => {
    try {
        const combos = await Combo.find().populate('product1 product2');
        res.status(200).json({
            message: "All combos retrieved successfully",
            combos
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: err.message });
    }
};

exports.createCombo = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { product1, product2, comboPrice, discountPercentage } = req.body;

    if (!product1) {
        return res.status(400).json({ error: 'Product1 is required' });
    }

    if (!product2) {
        return res.status(400).json({ error: 'Product2 is required' });
    }

    if (comboPrice == null) {
        return res.status(400).json({ error: 'Combo Price is required' });
    }

    if (discountPercentage == null) {
        return res.status(400).json({ error: 'Discount Percentage is required' });
    }

    try {
        const newCombo = new Combo({
            product1,
            product2,
            comboPrice,
            discountPercentage
        });
        const savedCombo = await newCombo.save();
        res.status(201).json({
            message: "Combo created successfully",
            savedCombo
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            error: err.message
        });
    }
};
