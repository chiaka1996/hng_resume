const myName = "Osuji Chiaka Daniel"
console.log(myName);


const express = require('express');
const app = express();
const path = require('path');
const http = require('http');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

app.use('/', express.static(path.join(__dirname, 'public')))

app.use(express.json());

const port = process.env.PORT || 5000;

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true});
const connection = mongoose.connection;
connection.once('open',(res) => {
    console.log("MongoDB connected");
});

 const api = require('./routes.js');

app.use('/apis', api );

 const server = http.createServer(app);
server.listen(port);

// app.listen(5000, _ => console.log('listening'));