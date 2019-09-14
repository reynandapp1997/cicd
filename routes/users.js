var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.status(200).json({
    user: 'User'
  });
});

router.get('/reytama', (req, res, next) => {
  res.status(200).json({
    user: 'reytama'
  });
});

module.exports = router;
