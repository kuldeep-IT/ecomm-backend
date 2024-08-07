const express = require('express');
const router = express.Router();
const comboController = require('../controllers/comboController');
const { validateCombo } = require('../middlewares/validatorMiddleware');

router.get('/', comboController.getAllCombos);
router.post('/', validateCombo, comboController.createCombo);

module.exports = router;
