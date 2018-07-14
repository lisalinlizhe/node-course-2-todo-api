const {ObjectID} = require('mongodb');
const MongoClinet = require('mongodb').MongoClient;
const {ObjectID} = require('mongodb');

var id = '5b45a804a9fa9a1030e2db4511';

if(!ObjectID.isValid(id)) {
  console.log('ID not valid');
}

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
