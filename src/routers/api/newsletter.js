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

router.post("/submitEmail", async (req, res) => {
    console.log(req.body)
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
        return res.send({...error.API_ERROR, err: body.errors[0].message || "API Error"})
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
    const source = fs.readFileSync(appDir + "/emails/newsletter-join.hbs", 'utf8')
	const template = handlebars.compile(source, { strict: true })
    const result = template({email})
    console.log(result)
    try{
        [Response, body] = await client.request({
            method: "POST",
            url: "/v3/mail/send",
            body: {
                "personalizations": [
                    {
                      "to": [
                        {
                          email
                        }
                      ],
                      "subject": "Welcome to the Flik Newsletter!"
                    }
                  ],
                  "from": {
                    "email": "hello@flik.im",
                    "name": "Flik Team"
                  },
                  "content": [
                    {
                      "type": "text/html",
                      "value": result
                    }
                  ]
            }
        })
    }catch(error) {
        return res.send(error.API_ERROR)
    }

    return res.send(success.NO_ERROR)
})

module.exports = router