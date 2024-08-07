const mongoose = require('mongoose');

const comboSchema = new mongoose.Schema({
    product1: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true

    },
    product2: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true

    },
    comboPrice: {
        type: Number,
        required: true
    },
    discountPercentage: {
        type: Number,
        required: true
    }
});

const Combo = mongoose.model('Combo', comboSchema);

module.exports = Combo;
