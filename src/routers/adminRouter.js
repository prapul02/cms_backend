const express = require("express");
const admin = require("../models/admin");
const { compareHash } = require("../utils/hash");
const { sign } = require("../utils/jwtService");
const {hash} = require("../utils/hash")

const AdminRouter = express.Router();

AdminRouter.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(password)
    const Admin = await admin.findOne({ email });
    if (Admin) {
      console.log(Admin)
      const result = await compareHash(password, Admin.password);
      if (result) {
        const jwtToken = sign({
          sub: "Admin",
          email
        });
        res.cookie("jwt", jwtToken, {
          httpOnly: true,
          secure: true
        });
        console.log(res)
        res.status(200).json({});
      } else {
        res.status(400).send("Invalid User");
      }
    }
  } catch (e) {
    console.error(e);
    res.status(500).send("Internal Server Error!");
  }
}).get("/logout", (req, res) => {
  res.clearCookie("jwt");
  res.redirect("/");
});

module.exports = AdminRouter;
