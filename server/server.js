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
app.listen(3034, ()=>{
  console.log('started on port 3003');
});

module.exports = {
  app
};
