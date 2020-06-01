const { execute, add } = require ('./note');

describe ('note functions', () => {
  it ('adds a note', () => {
    const actionObj = {
      type: 'add',
      payload: 'Note'
    };
    const results = add(actionObj);

    expect(results).toEqual({
      text: 'Note'
    });
  });

//   it('validates command line arguments with add', () => {
//     const action = {
//       type: 'badType',
//       payload: 'Note'
//     };

//     const isValid = valid(action);

//     expect(isValid).toBeFalsy();
//   });
});
