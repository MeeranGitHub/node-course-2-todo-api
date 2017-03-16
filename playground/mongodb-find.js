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
  // db.collection('Todos').find(
  //   {_id: new ObjectID('58c8a4654d31f034143cf74e') }).toArray().then((docs) =>
  // {
  //     console.log('Todos');
  //     console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });
  // db.collection('Todos').find().count().then((count) =>
  // {
  //     console.log(`Todos Count: ${count}`);
  //
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });
  db.collection('Users').find(
    {name: 'Junaitha Meeran Mohideen' }).toArray().then((docs) =>
  {
      console.log('Todos');
      console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('Unable to fetch todos', err);
  });
//  db.close();
});
