const express = require('express');
const { getAllDeliveries, createDelivery } = require('../controllers/deliveriesController');
const router = express.Router();

router.get('/', getAllDeliveries);
router.post('/', createDelivery);

module.exports = router;
