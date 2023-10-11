const express = require('express');
const router = express.Router();
const authCtrl = require('../controller/auth.controller');

router.post("/signin",authCtrl.signin);
router.get("/signout",authCtrl.signout);


module.exports = router;