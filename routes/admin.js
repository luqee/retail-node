const router = require('express').Router();

router.post('/retailer/create',(req, res) => {
    res.send('logged in!!');
});

router.get('/retailer',(req, res) => {
    res.send('list of retailers');
});

module.exports = router;