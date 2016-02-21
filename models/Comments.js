var mongoose = require('mongoose');
// var Schema   = mongoose.Schema;

var Comment = new mongoose.Schema({
    title : String,
});

mongoose.model('Comment', Comment);
