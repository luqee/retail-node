const router = require('express').Router();

router.get('/',(req, res) => {
    res.send('Landing page of app');
});

module.exports = router;