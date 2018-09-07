const express = require("express"),
    router = express.Router(),
    newsletter = require("./newsletter")

router.use("/newsletter", newsletter)

module.exports = router