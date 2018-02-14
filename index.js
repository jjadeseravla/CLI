const mongoose = require('mongoose');


//mongo promises are deprecated so need to map global promise
mongoose.Promise = global.Promise;
//connect to DB
const db = mongoose.connect('mongodb://localhost:27017/customercli');

// Import model
const Customer = require('./models/customer');

// Add customer
const addCustomer = (customer) => {
  Customer.create(customer).then(customer => { //callbacks with es6 and promise
    console.info('New Customer added');
    db.close(); //closes the db
  });
}

// Find customer
const findCustomer = (name) => {
  // Make case insensitive so we can find any case
  const search = new RegExp(name, 'i'); //lowecase i for case insensitive
  Customer.find({$or: [{firstname: search}, {lastname: search}]}) //Customer is the customer model
    .then(customer => {
      console.info(customer);
      console.info(`${customer.length} matches`); //back ticks allow interpolation
      db.close();
    });
}

// Update customer
const updateCustomer = (_id, customer) => { //takes in id field
  Customer.update({ _id }, customer) //take customer model and call update which takes in id and customer. id is to know which one to update and then customer is the data
    .then(customer => {
      console.info('Customer has been updated');
      db.close();
    });
}

// Remove customer
const removeCustomer = (_id) => { //takes in id field but not customer cos doesnt need any data if just removing it
  Customer.remove({ _id })
    .then(customer => {
      console.info('Customer has been removed');
      db.close();
    });
}

//List all customers
const listCustomers = () => {
  Customer.find()//no parameters because we want them all
    .then(customers => { //get all the customers as a response
      console.info(customers);
      console.info(`${customers.length} matches`);
      db.close();
  });
}

//Export all methods
module.exports = {
  addCustomer,
  findCustomer,
  updateCustomer,
  removeCustomer,
  listCustomers
}
