const express = require("express"),
    router = express.Router(),
    { error, success } = require("../../responses"),
    fs = require("fs"),
    handlebars = require("handlebars"),
    client = require("@sendgrid/client"),
    path = require("path"),
    appDir = path.dirname(require.main.filename)

client.setApiKey(process.env.SENDGRID_API_KEY)

const list_id = "5038953"

router.get("/", async (req, res) => {
    let email = req.query.email
    if(!email) return res.send(error.INVALID_DATA)
    let Response, body
    try{
        [Response, body] = await client.request({
            method: "GET",
            url: "/v3/contactdb/recipients/search?email=" + encodeURI(email),
        })
    }catch(error) {
        return res.send(error.API_ERROR)
    }
    if(body.recipient_count < 1) return res.send(error.INVALID_DATA)
    let recip_id = body.recipients[0].id
    try{
        [Response, body] = await client.request({
            method: "DELETE",
            url: `/v3/contactdb/lists/${list_id}/recipients/` + recip_id,
        })
    }catch(error) {
        return res.send(error.API_ERROR)
    }
    res.send("You were successfully unsubscribed! <a href='https://flik.im'>Click here to go to our homepage.</a>")
})

module.exports = router