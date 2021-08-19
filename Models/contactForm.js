const mongoose = require('mongoose');

const contact = mongoose.Schema;

const contactDetails = new contact({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    }
},
{
    timestamps: true
});

const formDetails = mongoose.model('details', contactDetails);

module.exports = formDetails;