const mongoose = require('mongoose');


//mongo promises are deprecated so need to map global promise
mongoose.Promise = global.Promise;
//connect to DB
const db = mongoose.connect('mongodb://localhost:27017/customercli', {
  useMongoClient: true
});
