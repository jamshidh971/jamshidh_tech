// Imports

const http = require ("http")
const express = require ("express")
const bodyParser = require("body-parser")
const ejs = require ("ejs")
const _ = require ("lodash")



const app = express()

app.set("view engine", "ejs")

// Static files
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static("public"))



app.get("/", function (req, res) {
    res.render("index")
})

app.get("/about", function(req, res) {
    res.render("about")
})

app.get("/contact", function(req, res) {
    res.render("contact")
})

app.get("/portfolio", function(req, res) {
    res.render("portfolio")
})


app.post("/portfolio", function(req, res){
    res.redirect("/");
  });

app.post(function(req, res){
    res.redirect("/");
})



// Listen on port 3000
app.listen(3000, function(req, res){
    console.log("server is running");
})