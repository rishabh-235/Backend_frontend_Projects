const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
    res.send('<h1>Welcome to the root route</h1>');
});

router.get('/about', (req, res)=>{
    res.send('<h1>Welcome to the about route</h1>');
});

module.exports = router;