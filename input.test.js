const { Input, parse, valid } = require('./input');

describe ('input functions', () => {
  it ('parses first 2 items in an array with minimist', () => {
    const arr = ['node', 'index.js', '--add', 'Note'];
    const results = parse(arr);

    expect(results).toEqual({
      type: 'add',
      payload: 'Note'
    });
  });
});

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
    const action = {
      type: 'add',
      payload: 'Note'
    };

    const isValid = input.valid(action);

    expect(isValid).toBeTruthy();
  });

  it('validates command line arguments with add', () => {
    const action = {
      type: 'badType',
      payload: 'Note'
    };

    const isValid = input.valid(action);

    expect(isValid).toBeFalsy();
  });
});
