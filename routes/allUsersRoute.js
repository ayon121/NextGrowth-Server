const express = require('express');
const { getAllUsers } = require('../controllers/usercontroller');


const router = express.Router();


// Route to get all tasks
router.get('/', getAllUsers);


module.exports = router;
