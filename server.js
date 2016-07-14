'use strict'
const express = require('express');
const app = express();
const logger = require('morgan');
const port = process.env.PORT || 3009
const path = require('path');

// const homeRoute = require('./routes/home')
// const taskRoute = require('./routes/task')


app.use(logger('dev'));
app.set(express.static(path.join(__dirname, 'public')));


app.route('/task/:id')
  .get((req,res)=>res.send(`show task ${req.params.id} `))
  .put((req, res)=>res.send(`edit task ${req.params.id} `))
  .delete((req,res)=>res.send(`deleted task ${req.params.id} `))

app.route('/task')
  .get((req,res)=>res.send('show tasks'))
  .post((req, res)=>res.send('posted new task'))

app.get('/', function(req, res){
  res.send("got to home page")
})


// app.use('/', homeRoute)
// app.use('task', taskRoute)


app.listen(port, function(){
  console.log("Server on ", port)
})

