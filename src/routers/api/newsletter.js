const express = require("express"),
    router = express.Router()

router.post("/submitEmail", (req, res) => {
    res.send({error: false})
})

module.exports = router