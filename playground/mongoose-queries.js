const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

// var id = '5b45a804a9fa9a1030e2db4511';
//
// if(!ObjectID.isValid(id)) {
//   console.log('ID not valid');
// }


// Todo.find({
//   _id: id
// }).then((todos)=>{
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo)=>{
//   console.log('Todo', todo);
// });

// Todo.findById(id).then((todo)=>{
//   if(!todo) {
//     return console.log('Id not found');
//   }
//   console.log('TodoById', todo);
// }).catch((e) =>console.log(e));

const {User} = require('./../server/models/user');

const id = '5b42e2d6648009210819fe05';

User.findById(id).then((user)=>{
  if(!user) {
    return console.log('Unable to find user');
  }

  console.log(JSON.stringify(user, undefined,2));
}, (e)=>{
  console.log(e);
});
