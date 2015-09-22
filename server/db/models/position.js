'use strict';

var mongoose = require('mongoose');
var schema = new mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    position: {
        type: String,
        required: true
    },
    startDate: {
        type: Date
    },
    endDate: {
        type: Date
    }
});


// generateSalt, encryptPassword and the pre 'save' and 'correctPassword' operations
// are all used for local authentication security.


mongoose.model('Position', schema);