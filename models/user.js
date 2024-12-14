const connectDB = require('../config/db');
async function getUserCollection() {
    const db = await connectDB();
    return db.collection('AllUsers');
}
module.exports = {  getUserCollection };

