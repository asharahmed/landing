const express = require("express"),
    router = express.Router(),
    { error, success } = require("../../responses"),
    client = require("@sendgrid/client")

client.setApiKey(process.env.SENDGRID_API_KEY)

const list_id = "5038953"

router.post("/submitEmail", (req, res) => {
    if(!req.body.email) res.send(error.INVALID_DATA)
    const email = req.body.email
    console.log(email)
    const createRecipient = {
        method: "POST",
        url: "/v3/contactdb/recipients",
        body: [{
            email
        }]
    }
    client.request(createRecipient)
        .then(([Response, body]) => {
            if(body.error_count > 0 || !body.persisted_recipients)
                return res.send({...error.API_ERROR, err: body.errors[0] || "API Error"})
            const recipId = body.persisted_recipients[0]
            let addToList = {
                method: "POST",
                url: `/v3/contactdb/lists/${list_id}/recipients/${recipId}`,
            }
            return client.request(addToList)
        })
        .then(([Response, body]) => {
            return res.send(success.NO_ERROR)
        })
})

module.exports = router