// Requires the library files you will be writing (input, notes)
// Instantiates an instance of an "Input" parser module
// Parses the command line input and returns the command and data
// Passes the command to the Notes library, which executes the command
const { parse, valid } = require('./lib/input');
const { execute } = require('./lib/note');

//use parse to create an action from process.argv
//use valid to check if it's a valid action
// if valid, execute
//otherwise, show error 

//as a ternary: (big diff bw ternary and if/else- you can return a ternary but not an if/else block)
// return valid(actionObj) ? execute(actionObj) : console.log('invalid command);

const actionObj = (parse(process.argv));

const isValid = valid(actionObj);

if(isValid) execute(actionObj);
else console.log('invalid command');

