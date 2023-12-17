const express = require('express');
const mongoose = require('mongoose');
const app = express();
const Port = 4000

// Connection URI
const uri = 'mongodb+srv://admin:admin01@cluster0.tzb67s4.mongodb.net/customers?retryWrites=true&w=majority'

// Connect to MongoDB using Mongoose
mongoose.connect(uri);

// Get the default connection
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB database');
});






app.listen(Port, () => {
    console.log(`Server listening on port ${Port}`);
  });
  
