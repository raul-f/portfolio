const path = require("path")
const express = require("express")

const app = express()
const port = process.env.PORT || 3000

app.use("/index.js", express.static(path.join(__dirname, "index.js")))

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"))
})

app.get("/home", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"))
})

app.get("/about", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"))
})

app.get("/projects", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"))
})

app.get("/contact", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"))
})

const listener = app.listen(port, function() {
    console.log("Node.js listening on port %s", listener.address().port)
})
