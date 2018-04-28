const express = require("express"),
	app = express()

app.use('/dist', express.static('dist'))

app.get("*", (req, res) => res.sendFile(__dirname + "/client/index.html"))

app.listen(process.env.PORT || 3000, () => console.log(`Listening on port ${process.env.PORT || 3000}`))