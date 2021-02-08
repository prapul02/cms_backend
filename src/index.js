require("./dbConfig/db.js");
const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const postRouter = require("../src/routers/blogPostRouter")
const adminRouter = require("../src/routers/adminRouter")


const app = express()

app.use(bodyParser.json())
app.use(cookieParser())
app.use(cors())

app.get("/", (req, res) => {
    res.send("<h1>Blog API Server!</h1>");
  });

  app.get("/logout", (req, res) => {
    res.clearCookie("jwt");
    res.redirect("/");
  });
  
  app.use("/posts", postRouter);
  app.use("/admin", adminRouter);



app.listen(process.env.PORT, () => {
    console.log("server started")
})
