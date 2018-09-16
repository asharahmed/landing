const express = require("express"),
    router = express.Router(),
    unsubscribe = require("./unsubscribe")

router.use("/unsubscribe", unsubscribe)

module.exports = router