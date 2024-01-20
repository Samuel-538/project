const express = require("express");
const router = express.Router();
const { finduser, adduser, getuser } = require("./dbcontroller");
const { protect } = require("./auth");
router.post("/sign-up", adduser);
router.post("/login", finduser);

module.exports = router;
