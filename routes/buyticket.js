const express = require('express');
const router = express.Router();

/* GET home page */
router.get('/buyticket', (req, res, next) => {

    res.render('buyticket',{title: 'ticket', bgPage: 'buyticket'})
});

module.exports = router;