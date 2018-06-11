// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/todoApp', (err, client)=>{
  if(err)
  {
    return console.log('Unable to connect to Mondodb server');
  }
  console.log('Connected to Mongodb server');
  var db = client.db('todoApp');

  db.collection('users').find({name: 'abhi'}).toArray().then((docs)=>{
    console.log('Users');
    // console.log(typeof(docs[0].name));
    console.log(JSON.stringify(docs, undefined, 2));
    console.log(`Users count: ${docs.length}`);
  }, (err)=>{
    console.log('Unable to fetch', err);
  });

  //
  // db.collection('users').find().count().then((count)=>{
  //   console.log(`user(s) count: ${count}`);
  // }, (err)=>{
  //   console.log('Unable to fetch', err);
  // })

  // client.close();
});
