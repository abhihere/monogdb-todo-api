var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/Todo');

var Todo = mongoose.model('Task',{
  text: {
    type: String,
    required: true,
    trim: true,
    minlength: 1
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default: null
  }
});
var newTodo = new Todo({
  text: 'Swimming'
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

var User = mongoose.model('Users',{
  email: {
    type: String,
    trim: true,
    minlength: 1,
    required: true
  }
});

var user1 = new User({
  email: 'abhijeetraut@gmail.com'
});

user1.save().then((result)=>{
  console.log(result);
}, (err)=>{
  console.log(err);
  console.log('failed');
});
