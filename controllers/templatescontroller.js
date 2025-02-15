const { ObjectId } = require('mongodb');
const { getTemplatesCollections } = require('../models/templates');

async function getTemplates(req, res) {
    try {
        const TemplatesCollection = await getTemplatesCollections();
        const Templates = await TemplatesCollection.find().toArray();
        res.status(200).json(Templates);
    } catch (error) {
        console.error('Error fetching templates:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

async function getTemplatesByID(req, res) {
    try {
      const { id } = req.params; // Extract id from URL parameters
      console.log(id);
  
      const TemplatesCollections = await getTemplatesCollections();
  
      // Convert id to ObjectId before querying
      const Demo = await TemplatesCollections.findOne({ _id: new ObjectId(id) });
  
      if (!Demo) {
        return res.status(404).json({ message: "Template not found" });
      }
  
      res.status(200).json(Demo);
    } catch (error) {
      console.error("Error fetching template by ID:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  }
  
module.exports = { getTemplates , getTemplatesByID};

