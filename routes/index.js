var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/api/says/:word', function(req, res, next){
  let result = {
    data: {
      says: req.params.word.toUpperCase()
    }
  }
  res.send(result)
})

module.exports = router;
