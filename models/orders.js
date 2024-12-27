const connectDB = require('../config/db');

async function getOrdersCollection () {
    const db = await connectDB();
    return db.collection('AllOrders');

}

module.exports = {getOrdersCollection}