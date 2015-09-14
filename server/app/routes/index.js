'use strict';
var router = require('express').Router();
module.exports = router;

router.use('/member', require('./member'));
router.use('/experience', require('./experience'));


// Make sure this is after all of
// the registered routes!
router.use(function (req, res) {
    res.status(404).end();
});
