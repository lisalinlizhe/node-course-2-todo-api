const MongoClinet = require('mongodb').MongoClient;
const {ObjectID} = require('mongodb');

MongoClinet.connect('mongodb://localhost:27017/TodoApp',(err, db)=>{
  if(err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').insertOne({
  //   text: 'Someting to do',
  //   completed: false
  // },(err, result)=>{
  //   if(err){
  //     return conosle.log('Unable to insert todo'. err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  // db.collection('Users').insertOne({
  //   name: 'Lisa',
  //   age: 25,
  //   location: 'CA'
  // },(err,result) =>{
  //   if(err){
  //     return conosle.log('Unable to insert todo'. err);
  //   }
  //   console.log(result.ops[0]._id);
  // });
  db.close();
});
