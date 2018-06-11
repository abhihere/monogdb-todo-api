var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/Todo');

var Todo = mongoose.model('Task',{
  text: {
    type: String
  },
  completed: {
    type: Boolean
  },
  completedAt: {
    type: Number
  }
});
//
var newTodo = new Todo({
  text: 'Go to sleep'
});

newTodo.save().then((result)=>{
  console.log(result);
}, (err)=>{
  console.log(err);
});

var otherTodo = new Todo({
  text: 'Feed the cat',
  completed: true,
  completedAt: 123
});

otherTodo.save().then((result)=>{
  console.log(result);
}, (err)=>{
  console.log(err);
})
