const express = require('express');
const router = express.Router();
const TextQuestion = require('../models/TextQuestion')


router.post('/', (req, res) => {
    console.log(req.body);
});


module.exports = router