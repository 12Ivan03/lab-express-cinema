const express = require('express');
const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {

    res.render('index',{title: 'HomePage', bgPage: 'homePage'})
});

module.exports = router;
