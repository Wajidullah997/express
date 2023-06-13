const express = require('express');
const app = express();
const path = require('path')
const port = 5000;
const staticPath = path.join(__dirname, "../public ");

app.set("views enging", "hbs");

app.use(express.static(staticpath));
app.get("", (req, res) => {
    res.render("index")
});

app.get("/", (req, res) => {
    res.send("hello i am wajid ullah")
});


app.listen(port, (req, res) => {
    console.log("listen  from 8000 port")
});