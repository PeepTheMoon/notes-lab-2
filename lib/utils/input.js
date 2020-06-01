const minimist = require('minimist');

// write parse function that returns an action containing the type (as property) to perform and the payload (as property) for the action.

const parse = (arr) => {
  const obj = minimist(arr);
  delete obj._;

  const [[type, payload]] = Object.entries(obj);

  return {
    type,
    payload
  };
};

//write valid function
// 1. evaluates and validates the input (returns true or false)
// Is the command (i.e. '--add') a valid command? (if valid returns true)
// 2. Is there data associated with the command (payload isn't empty)

//think about --a v --add

const valid = action => {
  return action.type === 'add' && action.payload;
};

module.exports = { 
  parse,
  valid
};
