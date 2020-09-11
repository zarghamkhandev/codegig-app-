const express = require("express");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
const path = require("path");
const db = require("./databse")

// test db

db.authenticate()
    .then(()=>{
        console.log("connected");
    })
    .catch(err=>console.log(err))

const app = express();
// Handlebars 
app.engine("handlebars",exphbs({defaultLayout:"main"}));
app.set("view engine","handlebars")
app.get("/",(req,res)=>{
    res.send("index")
})

// Gig routes
app.use("/gigs", require("./routes/gigs"))

const PORT = process.env.PORT || 5000;
app.listen(PORT);