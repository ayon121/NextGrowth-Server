const { getContactCollections } = require("../models/contactus");



// Controller function to get all contacts
async function getAllContacts(req, res) {
    try {
        const ContactCollection = await getContactCollections();
        const contacts = await ContactCollection.find().toArray();
        res.status(200).json(contacts);
    } catch (error) {
        console.error('Error fetching tasks:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

// add contacts
async function addContact(req, res) {
    try {
        const ContactCollection = await getContactCollections();
      const contact = req.body
      const result = await ContactCollection.insertOne(contact)
      res.send(result)
  
    } catch (error) {
      console.error('Error fetching tasks:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  }

module.exports = { getAllContacts , addContact };