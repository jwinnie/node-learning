
const express = require("express")
const app = express()

app.get("/", (request, result)=>{
  result.send("<h1>Hello, World!</h1>")
})

app.listen(3000, ()=>{
  console.log("It's live! Go to https://localhost:3000 to view the application.")
})
