var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/', function (req, res, next) {
    res.render('home', {
        title: 'Jack Huang',
        workStatus: 'app'
    });
});

router.use('/:workStatus', function (req, res, next) {
    console.log(req.params.workStatus);
    res.render('home', {
        title: 'Jack Huang',
        workStatus: req.params.workStatus
    });
});



//做页功能//
/*router.use('/home/:tag', function (req, res, next) {
   console.log(req.params.tag);
    res.render('home', {
        title: "JACK - IN THE BOX" + req.params.tag
    });*/
// });

module.exports = router;
