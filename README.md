# CLI

## Complete CRUD functionality in a command line interface. 

run ```$ mongod.exe``` to start your mongo server

on another command line add your customer to the database in the terminal by running ```$ node commands.js add Jade Alvares 123 jade@gmail.com```

to find a customer: ```$ node commands.js find jade```
 
to update customer (by id): ```$ node commands.js update 3f944367c896e4f```

if you run ```$ npm link``` you can open a terminal wherever and simply run:
```$ cli list```  this will list all customers and you can run any command this way.

## Tech used:
- Node.js
- MongoDB database
- Mongoose ORM
- Commander.js for CLI tools
- Inquirer.js for UX
