//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);

MongoClient
.connect('mongodb://localhost:27017/TodoApp',
(err, db) =>{
  if(err){
    return console.log('unable to connect mongodb server');
  }
  console.log('Connect to MongoDb server');
 // db.collection('Todos').insertOne({
 //   text: 'Something to do 5',
 //   completed: false
 // }, (err, result) => {
 //   if(err){
 //     return console.log('Unable to insert todo', err);
 //   }
 //   console.log(JSON.stringify(result.ops, undefined, 2));
 // });

 // db.collection('Users').insertOne({
 //   name: 'Junaitha Meeran Mohideen',
 //   age: 9,
 //   location: 'virgina'
 //    }, (err, result) => {
 //   if(err){
 //     return console.log('Unable to insert todo', err);
 //   }
 //   console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
 // });

  db.close();
});
