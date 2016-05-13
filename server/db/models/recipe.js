'use strict';
var mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name: {
        type: String
    },
    photoUrl: {
        type: String
    },
    ingredients: {
        type: [String]
    },
    dateAdded: { type: Date,
      default: Date.now },
    directions: {
        type: [String]
    },
    rating: {
      type: Number
    },
    notes: {
        type: [String]
    }


});



mongoose.model('Recipe', schema);
