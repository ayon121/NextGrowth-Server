const express = require('express');
const { getAllUsers, addUser } = require('../controllers/usercontroller');


const router = express.Router();


// Route to get all tasks
router.get('/', getAllUsers);

router.post('/adduser' , addUser);

module.exports = router;
