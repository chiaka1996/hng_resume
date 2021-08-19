const router = require('express').Router();

const details = require('./Controller/contact');

router.post('/submitForm', details.contactDetails);

module.exports = router;