const express = require('express');

const router = express.Router();

router.get('/test-me', function (req, res) {
    res.send('This is my first ever testing')
});

router.get('/give-me-students-data',function(req, res){

});

router.get('/saurabh', function (req, res) {
    let output =box.welcome()
    res.send(`${output}`)
});


module.exports = router;
// adding this comment for no reasonc