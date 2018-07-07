const MongoClinet = require('mongodb').MongoClient;
const {ObjectID} = require('mongodb');

MongoClinet.connect('mongodb://localhost:27017/TodoApp',(err, db)=>{
  if(err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  //deleteMany
  // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result)=>{
  //   console.log(JSON.stringify(result, undefined, 2));
  // });
  //deleteOne
  // db.collection('Todos').deleteOne({text: 'Each lunch'}).then((result)=>{
  //   console.log(JSON.stringify(result));
  // });

  //findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed: false}).then((result)=>{
  //   console.log(result);
  // });

  // db.collection('Users').deleteMany({name: 'Lisa'});
  db.collection('Users').findOneAndDelete({_id: new ObjectID("5b3f0ba4bf341f4888466869")
}).then((result)=>{
  console.log(JSON.stringify(result, undefined, 2))
});
  //db.close();
});
