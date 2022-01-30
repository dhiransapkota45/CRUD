const mongoose = require("mongoose")
const dbURI = `mongodb://localhost:27017/CRUD`

mongoose.connect(dbURI).then(()=>{console.log("connected to database");})
