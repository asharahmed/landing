const express = require("express"),
    router = express.Router(),
    { error, success } = require("../../responses"),
    client = require("@sendgrid/client")

client.setApiKey(process.env.SENDGRID_API_KEY)

const list_id = "5038953"

router.post("/submitEmail", async (req, res) => {
    const email = req.body.email
    if(!email) return res.send(error.INVALID_DATA)
    let request
    let Response, body
    try{
        [Response, body] = await client.request({
            method: "POST",
            url: "/v3/contactdb/recipients",
            body: [{
                email
            }]
        })
    }catch(error) {
        return res.send(error.API_ERROR)
    }
    if(body.error_count > 0 || !body.persisted_recipients)
        return res.send({...error.API_ERROR, err: body.errors[0] || "API Error"})
    let recipId = body.persisted_recipients[0]
    let url = "/v3/contactdb/lists/" + list_id + "/recipients/" + recipId
    try
    {
        [Response, body] = await client.request({
            method: "POST",
            url
        })
    }catch(error) {
        return res.send(error.API_ERROR)
    } 
    return res.send(success.NO_ERROR)
})

module.exports = router