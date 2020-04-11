var express = require('express');
var router = express.Router();
var path = require('path');
var overlay = require(path.join(__dirname, '../public/javascripts/data_updater.js'));
var overlay_data = overlay.data;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/settings', function(req, res, next) {
  res.render('setting_page', {});
});

router.get('/show', function(req, res, next){
  res.render('show_page', {});
});

router.get('/data', function(req, res, next) {
    res.json(overlay_data);
});

router.post('/data', function(req, res, next){
  overlay_data = req.body;
  res.json({});
});

router.get('/preview', function (req, res, next) {
  res.render('preview', overlay_data);
})

module.exports = router;
