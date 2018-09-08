const express = require("express"),
	app = express(),
	bodyParser = require("body-parser"),
	routers = require("./routers"),
	{ error, success } = require("./responses")

app.use('/dist', express.static('dist'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
	extended: true
}))

app.use((err, req, res, next) => {
    if(err) return res.send(error.INVALID_DATA)
    next()
})

app.use("/api", routers.api)

app.get("*", (req, res) => res.sendFile(__dirname + "/client/index.html"))

app.listen(process.env.PORT || 3000, () => console.log(`Listening on port ${process.env.PORT || 3000}`))