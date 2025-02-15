const connectDB = require('../config/db');

async function getContactCollections () {
    const db = await connectDB();
    return db.collection('AllContacts');

}

module.exports = {getContactCollections}

