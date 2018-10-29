const mongoose = require('mongoose');

module.exports = function() {
    let MONGODB_URI =  "mongodb://test:test@localhost:27017/test";

    // Configure mongoose to use Promises, because callbacks are passe.
    mongoose.Promise = global.Promise;
    // Connect to the Mongo DB
    return mongoose.connect(MONGODB_URI, { useNewUrlParser: true });
}
