var mongoose = require('mongoose');

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

var t = mongoose.model('l', {
  name: {
    type: String
  }
});

module.exports = {
  Todo,
  t
};
