var express = require('express');
var bodyParser = require('body-parser');


var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo.js');
var {User} = require('./models/users.js');

var app = express();

app.use(bodyParser.json());

app.post('/todos',(req, res)=>{
  console.log(req.body);
  var t = new Todo({
    text: req.body.text
  });

  t.save().then((result)=>{
    res.send(result);
  }, (err)=>{
    res.send(err);
  });
});

app.get('/todos',(req,res)=>{
  Todo.find().then((todos)=>{
    res.send({todos});
  }, (e)=>{
    res.status(400).send();
  })
});
app.listen(3035, ()=>{
  console.log('started on port 3035');
});

module.exports = {
  app
};
