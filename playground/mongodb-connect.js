// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

var object = new ObjectID();
console.log(object);

MongoClient.connect('mongodb://localhost:27017/todoApp', (err, client)=>{
  if(err)
  {
    return console.log('Unable to connect to Mondodb server');
  }
  console.log('Connected to Mongodb server');
  var db = client.db('todoApp');


  // db.collection('todos').insertOne({
  //   text: 'go home',
  //   completed: false
  // }, (err, result)=>{
  //   if(err){
  //     return console.log('Unable to insert document', err);
  //   }
  //
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  db.collection('users').insertMany([{
    name: 'kunal',
    age: 20,
    location: 'Nira'
  },{
    name: 'Sanket',
    age: 20,
    location: 'Pune'
  }], (err, result)=>{
    if(err){
      return console.log('Unable to insert record');
    }

    console.log(JSON.stringify(result.ops[0]._id, undefined, 2));
  });
  client.close();
});
