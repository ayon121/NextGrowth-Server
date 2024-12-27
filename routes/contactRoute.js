const express = require('express');
const { addContact, getAllContacts } = require('../controllers/contactcontroller');

const router = express.Router();


router.post('/' , addContact)

router.get("/all" , getAllContacts)


module.exports = router;

