const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');
const app =express();

//DB config
const db= keys.mongoURI;
mongoose
       .connect(db)
       .then(()=>console.log('MongoDb connected'))
       .catch(err=>console.log(err))

//first roue
app.get('/',(req,res) => res.send('Hello world'));

//use route
app.use('/api/users',users);
app.use('/api/profile',profile);
app.use('/api/posts',posts);

const port = 5000;
app.listen(port, ()=>console.log(`server is running on port ${port}`) );
