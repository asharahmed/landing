const express = require("express"),
	app = express(),
	bodyParser = require("body-parser"),
	routers = require("./routers"),
	client = require("@sendgrid/client")

client.setApiKey(process.env.SENDGRID_API_KEY)
// let's initialize sendgrid
const request = {
	method: "GET",
	url: "/v3/contactdb/lists/5038953/recipients"
}

client.request(request)
	.then(([Response, body]) => {
		console.log(body)
	})

app.use('/dist', express.static('dist'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
	extended: true
}))

app.use((err, req, res, next) => {
    if(err) return res.send({err: "Invalid data", code: 1})
    next()
})

app.use("/api", routers.api)

app.get("*", (req, res) => res.sendFile(__dirname + "/client/index.html"))

app.listen(process.env.PORT || 3000, () => console.log(`Listening on port ${process.env.PORT || 3000}`))