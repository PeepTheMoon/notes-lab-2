const minimist = require('minimist');

//parse function returns an action containing the type (as property) to perform and the payload (as property) for the action.

// const parse = (arr) => {
//   const obj = minimist(arr);
//   delete obj._;

//   const [[type, payload]] = Object.entries(obj);

//   //think about --a v --add
//   //if type==='a' {
//   //return 'add'
//   //}

//   return {
//     type,
//     payload
//   };
// };

class Input {
  constructor(arr) {
    const obj = minimist(arr);
    delete obj._;

    const [[type, payload]] = Object.entries(obj);
    
    this.type = type;
    this.payload = payload;
  }

  // valid method evaluates and validates the input (returns true or false), and checks that there's data associated with the command (payload isn't empty)

  valid() {
    const { type, payload } = this;

    switch(type) {
      case 'add':
        return payload;
      case 'delete':
        return payload;
      case 'list':
        return true;  
      default: return;
    }
  }
}

module.exports = Input;
