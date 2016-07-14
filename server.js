'use strict'

  const env         = process.env.NODE_ENV || 'development';
  const DEV         = env==='development';
  const dotenv      = (DEV) ? require('dotenv').config() : undefined;

const express = require('express');
const app = express();
const bodyParser = require('body-Parser')
const logger = require('morgan');
const port = process.env.PORT || 3009
const path = require('path');

// const homeRoute = require('./routes/home')
 const taskRoutes = require('./routes/tasks')

app.use(logger('dev'));
app.set(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());



// app.get('/', function(req, res){
//   res.send("got to home page")
// })
app.use('/tasks', taskRoutes);

// app.use('/', homeRoute)
// app.use('task', taskRoute)

app.listen(port, function(){
  console.log("Server on ", port)
})

