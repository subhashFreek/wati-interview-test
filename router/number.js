const express = require('express')
const router = express.Router();
const {add} = require('../controller/number');

router.post("/add", add);


module.exports = router