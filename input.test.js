const Input = require('./Input');
  
describe('Input class', () => {
  let input;
  beforeEach(() => {
    const commandLineArguments = ['node', 'index.js', '--add', 'Note'];

    input = new Input(commandLineArguments);
  });

  it('has a flag as type and a payload as note text', () => {
    
    expect(input.type).toEqual('add');
    expect(input.payload).toEqual('Note');
  });

  it('has a valid method', () => {
    const commandLineArguments = ['node', 'index.js', '--add', 'Note'];

    const input = new Input(commandLineArguments);

    const isValid = input.valid();

    expect(isValid).toBeTruthy();
  });

  it('validates command line arguments with add', () => {
    const commandLineArguments = ['node', 'index.js', '--badType', 'Note'];

    const input = new Input(commandLineArguments);

    const isValid = input.valid();
    
    expect(isValid).toBeFalsy();
  });
});
