const express = require('express');
const {getTemplates  } = require('../controllers/templatescontroller');


const router = express.Router();


// Route to get all tasks
router.get('/', getTemplates);



module.exports = router;
