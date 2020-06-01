const { parse } = require ('./input');

it ('skips first 2 items in an array with minimist', () => {
  const arr = ['node', 'index.js', '--add', 'Note'];

  const results = parse(arr);

  expect(results).toEqual({
    add: 'Note',
    _: ['node', 'index.js']
  });
});
