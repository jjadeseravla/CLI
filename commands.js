const program = require('commander');
const { prompt } = require('inquirer');
const {
  addCustomer,
  findCustomer
} = require('./index');

//Customer questions
const questions = [
  {
    type: 'input',
    name: 'firstname',
    message: 'Customer first name'
  },
  {
    type: 'input',
    name: 'lastname',
    message: 'Customer last name'
  },
  {
    type: 'input',
    name: 'phone',
    message: 'Customer phone number'
  },
  {
    type: 'input',
    name: 'email',
    message: 'Customer email address'
  }
];

program
  .version('1.0.0')
  .description('Client Management System')

// program
//   .command('add <firstname> <lastname> <phone> <email>')
//   .alias('a')
//   .description('Add a customer')
//   .action((firstname, lastname, phone, email) => {
//     addCustomer({firstname, lastname, phone, email});
//   });

program
  .command('add')
  .alias('a')
  .description('Add a customer')
  .action(() => {
    prompt(questions).then(answers => addCustomer(answers)); //gives a promise which then returns you answers
  })

program
  .command('find <name>')
  .alias('f')
  .description('Find a customer')
  .action(name => findCustomer(name));


program.parse(process.argv);

//https://www.youtube.com/watch?v=v2GKt39-LPA
     //dsf
