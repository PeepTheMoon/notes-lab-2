const minimist = require('minimist');
// write parse function:
//returns an action containing the type (as property) to perform and the payload(as property) for the action

// first, use minimist to parse out the first 2 items in an array:
const parse = (arr) => {
  return minimist(arr);
};


module.exports = { 
  parse
};

//write valid function
// 1. evaluates and validates the input (returns true or false)
// Is the command (i.e. '--add') a valid command (if valid returns false)
// 2. Is there data associated with the command

// use minimist to read command line arguments

