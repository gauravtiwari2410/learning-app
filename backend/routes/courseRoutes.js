const express = require('express');
const {connectDB} = require('../config/dbconnection')
const router = express.Router();
require('dotenv').config(); 

// MongoDB collections
const dbName = process.env.dbname;
const courseCollection = process.env.courseCollectionName;
let db;
connectDB(dbName).then(client => {
    db = client;
});

// Get Courses Endpoint
router.get('/courses', async (req, res) => {
    console.log("courseCollection :"+courseCollection)
    const courses = await db.collection(courseCollection).find({}).toArray();
    console.log(courses);
    res.status(200).json({ courses });
});

// Add Course Endpoint
router.post('/addcourse', async (req, res) => {
    const { name } = req.body;
    await db.collection(courseCollection).insertOne({ name });
    res.status(201).json({ message: 'Course added' });
});

module.exports = router;
