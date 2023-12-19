let mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/Node-JS");

module.exports = mongoose;