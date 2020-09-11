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
// body parser
app.use(bodyParser.urlencoded({extended:false}))
// index router
app.get("/",(req,res)=>{
    res.render("index",{layout:"landing"})
})
// set static folder 
app.use(express.static(path.join(__dirname,"/public")))
// Gig routes
app.use("/gigs", require("./routes/gigs"))

const PORT = process.env.PORT || 5000;
app.listen(PORT);