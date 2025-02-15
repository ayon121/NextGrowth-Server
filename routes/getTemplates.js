const express = require('express');
const {getTemplates , getTemplatesByID  } = require('../controllers/templatescontroller');


const router = express.Router();


// Route to get all tasks
router.get('/', getTemplates);
router.get('/:id', getTemplatesByID);



module.exports = router;
