// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/todoApp', (err, client)=>{
  if(err)
  {
    return console.log('Unable to connect to Mondodb server');
  }
  console.log('Connected to Mongodb server');
  var db = client.db('todoApp');

  //deleteMany
  db.collection('todos').deleteMany({text: 'Eat lunch'}).then((result)=>{
    console.log('Deleted');
    console.log(result);
  })

  //deleteOne
  db.collection('todos').deleteOne({text: 'Eat lunch'}).then((result)=>{
    console.log(result);
  })

  //fineOneAndDelete
  db.collection('todos').findOneAndDelete({completed: false}).then((result)=>{
    console.log(result);
  })
  // client.close();
});
