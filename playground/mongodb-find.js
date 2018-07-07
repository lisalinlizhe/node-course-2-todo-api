const MongoClinet = require('mongodb').MongoClient;
const {ObjectID} = require('mongodb');

MongoClinet.connect('mongodb://localhost:27017/TodoApp',(err, db)=>{
  if(err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').find({
  //   _id: new ObjectID('5b3f097190554e48798352b1')
  // }).toArray().then((docs)=>{
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // },(err) => {
  //   console.log('Unable to fetch todos', err);
  // });

  // db.collection('Todos').find().count().then((count)=>{
  //   console.log(`Todos count: ${count}`);
  // },(err) => {
  //   console.log('Unable to fetch todos', err);
  // });
  db.collection('Users').find({name: 'Lisa'}).toArray().then((doc)=>{
    console.log(JSON.stringify(doc, undefined, 2));
  },(err) => {
    console.log('Unable to fetch todos', err);
  });

  // db.close();
});
