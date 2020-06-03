const Input = require('./Input');
const Note = require('./Note');

const input = new Input(process.argv);
if(input.valid()) Note.execute(input);
else console.log('invalid command');


//use parse to create an action from process.argv
//use valid to check if it's a valid action
// if valid, execute
//otherwise, show error 

//as a ternary: (big diff bw ternary and if/else- you can return a ternary but not an if/else block)
// return valid(actionObj) ? execute(actionObj) : console.log('invalid command);

// const isValid = valid(actionObj);

// if(isValid) execute(actionObj);
// else console.log('invalid command');

