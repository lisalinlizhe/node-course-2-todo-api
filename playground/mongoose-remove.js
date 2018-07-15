const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

// Todo.remove({}).then((result)=>{
//   console.log(result);
// });

Todo.findOneAndRemove({_id: '5b4ada18f6ad8619747d3e47'}).then((todo) => {
  console.log(todo);
});

Todo.findByIdAndRemove('5b4ada18f6ad8619747d3e47').then((todo)=>{
  console.log(todo);
});
