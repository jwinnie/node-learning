
const express = require("express")
const app = express()

app.set("view engine", "pug")

app.get("/", (request, result)=>{
  result.render("main")
})

app.listen(3000, ()=>{
  console.log("It's live! Go to https://localhost:3000 to view the application.")
})
