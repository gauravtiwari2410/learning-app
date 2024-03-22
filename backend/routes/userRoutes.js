const express = require("express");
const {connectDB} = require('../config/dbconnection')
const router = express.Router();
require('dotenv').config(); 

//Mongo db Collections
const dbName = process.env.dbname;
const userCollection = process.env.userCollectionName;
let db;
connectDB(dbName).then(client=>{
    db=client;
});

//Login Endpoint
router.post("/login",async (req,res)=>{
    const {email,password} = req.body;
    const collection = db.collection(userCollection);
    const cursor = await collection.find({}); // Empty query finds all documents
    const data = await cursor.toArray();
    const user =await db.collection(userCollection).findOne({email,password});
    if(user){
        res.status(200).json({message:"Login successfull"});
    }else{
        res.status(401).json({message:"Login failed"});
    }
});

// Signup Endpoint
router.post('/signup', async (req, res) => {
    const { email, password } = req.body;
    await db.collection(userCollection).insertOne({ email, password });
    res.status(201).json({ message: 'User created' });
});

module.exports = router;