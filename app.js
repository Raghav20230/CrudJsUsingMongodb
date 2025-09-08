const express = require('express');   //express
const mongoose = require('mongoose');  //mongoose 
const url = 'mongodb://localhost/AlienDBex';

const app = express(); // we want express

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

const con = mongoose.connection;

con.on('open', () => {       //connected with database
  console.log('Connected to MongoDB...');
});
app.use(express.json())

const alienRouter = require('./routers/aliens.js');  //creating routing module
app.use('/aliens', alienRouter);

app.listen(9000, () => {
  console.log('Server Started on port 9000');
});
