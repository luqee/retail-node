const router = require('express').Router();

router.get('/',(req, res) => {
    res.render('index');
});

router.get('/login',(req, res) => {
    res.render('login', {layout: 'login'});
});

module.exports = router;