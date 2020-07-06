const { parse, valid } = require ('./input');

describe ('input functions', () => {
  it ('parses first 2 items in an array with minimist', () => {
    const arr = ['node', 'index.js', '--add', 'Note'];
    const results = parse(arr);

    expect(results).toEqual({
      type: 'add',
      payload: 'Note'
    });
  });

  it('validates command line arguments with add', () => {
    const action = {
      type: 'add',
      payload: 'Note'
    };

    const isValid = valid(action);

    expect(isValid).toBeTruthy();
  });

  it('validates command line arguments with add', () => {
    const action = {
      type: 'badType',
      payload: 'Note'
    };

    const isValid = valid(action);

    expect(isValid).toBeFalsy();
  });
});
