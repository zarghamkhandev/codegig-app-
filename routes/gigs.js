const express = require("express");
const router = express.Router();
const db = require("../databse");
const Gig = require("../models/Gig")


// get gig list
router.get("/",(req,res)=>{
    Gig.findAll()
        .then(gigs=>{
            console.log(gigs);
            res.sendStatus(200);
        })
        .catch(err=>console.log(err))
})
// add a gig

router.get("/add",(req,res)=>{
     const data = {
         title:"Looking for a React Developer",
         technologies: "React, javascript, html, css",
         budget: "3000$",
         description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
         contact_email: "user1@gmail.com"
     }

     let {title,technologies,budget, description,contact_email} = data;

     // insert into table
     Gig.create({
         title,
         technologies,
         description,
         budget,
         contact_email
     })
     .then(gig=> res.redirect("/gigs"))
     .catch(err=>console.log(err))
})


module.exports = router;