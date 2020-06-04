const mongoose = require('mongoose');

// Creates a note schema (like a class)
const noteSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true
  }
});

noteSchema.statics.execute = function(actionObj) {
  console.log(actionObj);
  // creates and adds a note
  if(actionObj.type === 'add') {
    // const text = '';

    return this.create({
      text: actionObj.payload
    }, console.log(`Note added: ${actionObj.payload}`));

    // returns all of the user's notes
  } else if(actionObj.type === 'list') {
    return this.find()
      .lean()
      .then(notes => {
        console.log(notes);
        return notes;
      });

    //deletes a note
  } else if(actionObj.type === 'delete') {
    return this.findByIdAndDelete(actionObj.payload)
      .then(note => {
        console.log(`Note deleted: ${note.text}`);
        return note;
      }); 
  }
};

module.exports = mongoose.model('Note', noteSchema);


// class Note {
//   //constructs the shape of the note object
//   constructor(id, text) {
//     this.id = id;
//     this.text = text;
//   }

//   // add method adds a note.  In the future it will add the note to the db
//   static add(actionObj) {
//     const note = new Note (Date.now(), actionObj.payload);

//     console.log(`Note added: ${note.text}`);

//     return note;
//   }

//   //execute method takes an actionObj and chooses what method to run
//   static execute(actionObj) {
//   //add error messages?
//     switch(actionObj.type) {
//       case 'add':
//         return this.add(actionObj);

//       // Nothing is returned if no command given
//       default:
//         return;
//     }
//   }
// }

// module.exports = Note;



// // add function adds a note.  In the future it will add the note to the db

// const add = actionObj => {
//   const note = {
//     id: Date.now(),
//     text: actionObj.payload
//   };

//   console.log(`Note added: ${note.text}`);
//   return note;
// };

// // execute takes an actionObj and chooses what method to run

// // Creates an object representing a note and console.log the text of the note to be added when the add command is executed

// const execute = actionObj => {
//   switch(actionObj.type) {
//     case 'add':
//       return add(actionObj);
      
//     // Nothing is returned if no command given
//     default:
//       return;
//   }
// };

// module.exports = {
//   execute,
//   add
// };
