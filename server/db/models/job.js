'use strict';

var mongoose = require('mongoose');
var schema = new mongoose.Schema({
    company: {
        type: String,
        required: true
    },
    address: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Address'
    },
    position: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Position'
    }],
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date
    }
});


// generateSalt, encryptPassword and the pre 'save' and 'correctPassword' operations
// are all used for local authentication security.


mongoose.model('Job', schema);