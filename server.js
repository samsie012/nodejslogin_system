const express = require("express");
const app = express();
const port = process.env.PORT || 3000

app.set("view engine", 'ejs')

app.get('/',(req,res)=>{
    res.status(200).render("base", {title: "Login system"});

})

app.listen(port,console.log("Listening to server on http://localhost:3000"));
// hii there
