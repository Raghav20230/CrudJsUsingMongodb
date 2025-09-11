const express = require('express');   //express->Express = Server banane ka shortcut.
const mongoose = require('mongoose');  //mongoose ->MongoDB ka helper jo Node.js ke liye easy queries deta hai
const url = 'mongodb://localhost/AlienDBex'; //Ye line batati hai kis database se connect karna hai [humre local pr]

const app = express(); // we want express=>tumhara chhota web server hai jo sab handle karega=>app = express() → ek server banaya jisme hum routes aur APIs banayenge.
//Routes define kar sakte ho (app.get, app.post …)
//Middleware add kar sakte ho (app.use)
//Server ko start kar sakte ho (app.listen)

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });//: Yahaan hum Mongoose ko bol rahe ho → "MongoDB ke saath connect ho jao
//mongoose.connect(url, ...) → tumhara gate pass hai jo ghar (database) me entry deta hai.
//useNewUrlParser → purane chabi (key) ke jagah nayi chabi use karna.
//useUnifiedTopology → ek modern security guard jo andar–bahar aane jaane ko smooth handle karta
const con = mongoose.connection;

con.on('open', () => {       //connected with database
  console.log('Connected to MongoDB...');
});
app.use(express.json())

const alienRouter = require('./routers/aliens.js');  //creating routing module
app.use('/aliens', alienRouter);//URL ka prefix set karti hai aur routing ko connect karti hai.
app.listen(9000, () => {
  console.log('Server Started on port 9000');
});
