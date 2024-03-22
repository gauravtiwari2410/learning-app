require('dotenv').config(); 
const { MongoClient } = require('mongodb');

// Database Connection URL from Environment Variables
const uri = process.env.MONGO_URI;
const PORT = process.env.PORT;

// Create a new MongoClient
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function connectDB(dbName) {
    try {
        await client.connect();
        console.log("Connected to MongoDB Atlas!");
        return client.db(dbName); // Make sure to replace 'yourDatabaseName' with your actual database name
    } catch (error) {
        console.error("Error connecting to MongoDB Atlas:", error);
        process.exit(1);
    }
}
module.exports = {connectDB};