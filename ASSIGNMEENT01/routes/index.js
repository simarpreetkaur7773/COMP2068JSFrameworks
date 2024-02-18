var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'ePortfolio' });
});

router.get('/about', (req, res, next) => {
  res.render('about', { title: 'About Me' });
});

router.get('/project', (req, res, next) => {
  res.render('project', { title: 'Projects' });
});

router.get('/contact', (req, res, next) => {
  res.render('contact', { title: 'Contact Me' });
});
module.exports = router;
