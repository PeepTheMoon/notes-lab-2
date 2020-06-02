const Note = require('./Note.js');

describe ('Note class', () => {
  it('has and id and text', () => {

    const note = new Note(5, 'Note');

    expect(note.id).toEqual(expect.any(Number));
    expect(note.text).toEqual('Note');
  });

  it('has an add method', () => {
    const actionObj = {
      type: 'add',
      payload: 'Note'
    };

    const note = Note.add(actionObj);

    expect(note.id).toEqual(expect.any(Number));
    expect(note.text).toEqual('Note');
  });

  it('has an execute method', () => {
    const actionObj = {
      type: 'add',
      payload: 'Note'
    };

    const note = Note.execute(actionObj);

    expect(note.id).toEqual(expect.any(Number));
    expect(note.text).toEqual('Note');
  });

  it('does nothing if the action type is not understood', () => {
    const actionObj = {
      type: 'badType',
      payload: 'Note'
    };

    const note = Note.execute(actionObj);

    expect(note).toBeUndefined();
  });
});



// const { execute, add } = require ('./note');

// describe ('note functions', () => {
//   //currently just returns a note and console.logs it for now.
//   it ('adds a note', () => {
//     const actionObj = {
//       type: 'add',
//       payload: 'Note'
//     };
//     const note = add(actionObj);

//     expect(note).toEqual({
//       id: expect.any(Number),
//       text: 'Note'
//     });
//   });

//   it('adds a note and console.logs', () => {
//     console.log = jest.fn();
        
//     const actionObj = {
//       type: 'add',
//       payload: 'Note'
//     };
//     const note = add(actionObj);

//     // expect a console.log to have happened.
//     expect(console.log).toHaveBeenCalledTimes(1);
//     expect(console.log).toHaveBeenCalledWith(`Note added: ${note.text}`);
//   });

//   it ('executes on an actionObj', () => {
//     const actionObj = {
//       type: 'add',
//       payload: 'Note'
//     };

//     const note = execute(actionObj);

//     expect(note).toEqual({
//       id: expect.any(Number),
//       text: 'Note'
//     });
//   });

//   it ('does nothing if the action type is not understood', () => {
//     const actionObj = {
//       type: 'badType',
//       payload: 'Note'
//     };

//     const result = execute(actionObj);

//     expect(result).toBeUndefined();
//   });
// });
