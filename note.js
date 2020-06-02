class Note {
  //constructs the shape of the note object
  constructor(id, text) {
    this.id = id;
    this.text = text;
  }

  // add method adds a note.  In the future it will add the note to the db
  static add(actionObj) {
    const note = {
      id: Date.now(),
      text: actionObj.payload
    };

    console.log(`Note added: ${note.text}`);

    return note;
  }

  //execute method takes an actionObj and chooses what method to run
  static execute(actionObj) {
  //add error messages?
    switch(actionObj.type) {
      case 'add':
        return this.add(actionObj);

      // Nothing is returned if no command given
      default:
        return;
    }
  }
}

module.exports = Note;



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
