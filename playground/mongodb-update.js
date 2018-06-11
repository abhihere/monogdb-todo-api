// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/todoApp', (err, client)=>{
  if(err)
  {
    return console.log('Unable to connect to Mondodb server');
  }
  console.log('Connected to Mongodb server');
  var db = client.db('todoApp');

  db.collection('todos').findOneAndUpdate({
    text: 'Eat lunch'
  },{
    $set: {
      completed: false
    }
  }, {
    returnOriginal: false
  }).then((result)=>{
    console.log(result);
  })

  db.collection('users').findOneAndUpdate({
    name: 'abhi'
  },{
    $inc: {
      age: 1
    },
    $set: {
      location: 'VIT'
    }
  }, {
    returnOriginal: false
  }).then((result)=>{
    console.log(result);
  })
  // client.close();
});
