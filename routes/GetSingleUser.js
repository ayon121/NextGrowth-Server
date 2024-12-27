const express = require('express');
const { getUserByEmail } = require('../controllers/usercontroller');


const router = express.Router();


// Route to get all tasks
router.get('/:email', getUserByEmail);



module.exports = router;
