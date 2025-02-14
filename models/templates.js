const connectDB = require('../config/db');

async function getTemplatesCollections () {
    const db = await connectDB();
    return db.collection('templates');

}

module.exports = {getTemplatesCollections}

