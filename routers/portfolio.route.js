const getControler = require('../controlers/portfolio.controler');

const router = require('express').Router();

router.get("",getControler);

module.exports = router;