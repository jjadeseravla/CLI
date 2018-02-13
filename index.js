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

//Export all methods
module.exports = {
  addCustomer,
  findCustomer
}
