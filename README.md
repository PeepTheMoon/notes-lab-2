LAB: Node Ecosystem
Time to get hands on with Node.js development! Today, you'll begin a multi-day build of a command-line (Terminal-based) note taking application.

This begins the first of a 4-part build of an application called Notesy. Today, our goal will be to get the basic wiring of the application in place, ensuring that our notes app can receive user input (a note) and provide some basic output in response.

Before you begin
Create a new repository for this project, called notes and work in a branch called class-01, created from master
Following completion of this assignment, you may merge this branch back into your master branch.
Phase 1 Requirements
For the first phase, our notes application will accept and validate the user's input, and confirm that the note was valid.

As a user, I want to be able to call the application using command line standard syntax, indicating the text of a note I wish to add so that the system will eventually be able to save this note.
As a user, I expect that the application will confirm my intent.
For Example:
node index.js --add "This is a really cool thing that I wanted to remember for later"
The system should respond with an on-screen confirmation message as follows

Adding Note: This is a really cool thing that I wanted to remember for later
Technical Requirements / Notes
Write this application in JavaScript as a Node.js application
The application must be able to parse command line arguments
e.g.
The --add (or -a) is used to tell your application that the user wants to ADD a new note
All of the text following the -a, within quotes is the text of the note itself
If the user doesn't provide a valid argument (-a), show them an error
If the user specifies the flag, but doesn't provide any text, show them an error
Otherwise, display a confirmation of the note text that they specified
Using the jest framework, write tests to assert that your application is working correctly.
As noted in the Application Requirements document
Make sure that your package.json file is setup with a test script
You will need this to be able to run npm test on your machine
GitHub Actions will also use that command to run your tests in the cloud
For the input module tests, create a lib/input.test.js file. You will need to assert the following:
To test the parse function pass it an array of command line arguments (e.g. ['--add', 'My Note'])
Given good input:
The valid function returns true
The parse function returns an object with type and payload properties
Given invalid input:
The valid function returns false
For the notes module tests, you will need to assert the following:
Nothing is returned if no command given
If the command and data were both valid, assert that a note is returned (a note is an object { text: 'My Note' }) Use the following files/structure
index.js - Your application's "entry point"
Requires the library files you will be writing (input, notes)
Instantiates an instance of an "Input" parser module
Parses the command line input and returns the command and data
Passes the command to the Notes library, which executes the command
lib/input.js
Exports parse and valid functions
Uses minimist (or any other node/npm library of your choosing) to read command line arguments
valid evaluates and validates the input (returns true or false)
Is the command (i.e. '--add') a valid command
Is there data associated with the command
parse returns an action containing the type to perform and the payload for the action
for example:

  {
    type: "add";
    payload: "This is a really cool thing that I wanted to remember for later"
  }
lib/notes.js
Exports an execute function
execute takes an action and chooses
How will you use that object to run the correct method?
You can predict that add won't be the only action we're going to have to handle...
write an add function that will create an object representing a note (with an ID and the note text as properties) and console.log the text of the note to be added when the add command is executed