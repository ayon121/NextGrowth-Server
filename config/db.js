const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config();


const client = new MongoClient(process.env.MongoURI, {
 serverApi: {
   version: ServerApiVersion.v1,
   strict: true,
   deprecationErrors: true,
 },
});


async function connectDB() {
 try {
   await client.connect();
   console.log('Connected to MongoDB     -----------');
   return client.db('NextGrowthDB');  
 } catch (error) {
   console.error('MongoDB connection error:', error);
 }
}


module.exports = connectDB;

