const express = require('express');
const { createOrders } = require('../controllers/orderscontroller');
const router = express.Router();


router.post('/:email' , createOrders );

module.exports = router;