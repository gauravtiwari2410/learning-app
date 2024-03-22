const express = require("express")
require('dotenv').config(); 
const userRoutes = require('./routes/userRoutes');
const courseRoutes = require('./routes/courseRoutes');
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());


const fs = require('fs');
const path = require('path');




const dbname = process.env.learningAppDB;


app.use(userRoutes);
app.use(courseRoutes);


const PORT = process.env.PORT || 3000;

// Serve static files from the React app build folder
app.use(express.static(path.join(__dirname, '../frontend/build')));

// Handles any requests that don't match the ones above
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/build', 'index.html'));
});

app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`);
})