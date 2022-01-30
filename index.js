
const express = require("express")
const app = express()
const route = require("./routers/route")
require("./db/db")

app.use(express.json())

app.use("/api", route)

app.listen(4000, ()=>console.log("listening at port 3000"))

