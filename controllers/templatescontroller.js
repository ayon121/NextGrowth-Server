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

module.exports = { getTemplates };