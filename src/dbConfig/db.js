const mongoose = require("mongoose");

mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection;

db.on("error", (error)=> {
    console.log("Mongo Connection Error")
    console.log(error)
})

db.once("open", ()=> {
    console.log("connection established")
})