const express = require("express");
const { db } = require("../model/connectDB");
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
const UserRouter = express.Router();

UserRouter.post("/register", async (req, res, next) => {
  const { email, username, password } = req.body;

  if (!email || !username || !password)
    return res.status(400).json({
      success: false,
      message: "Missing email or username or password ",
    });

  try {
    const user = await db.Users.findOne({ username });
    if (user) {
      return res
        .status(400)
        .json({ success: false, message: "Username already taken" });
    }

    const newpassword = await bcrypt.hash(password, 10);

    const newUser = await db.Users.insertOne({
      email,
      username,
      password: newpassword,
    });
    const accessToken = jwt.sign({ userId: newUser.insertedId }, "sha");
    res.json({ success: true, accessToken });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

UserRouter.post("/login", async (req, res, next) => {
  const { username, password } = req.body;

  if (!username || !password)
    return res.status(400).json({
      success: false,
      message: "Missing username or password ",
    });

  try {
    const user = await db.Users.findOne({ username });
    if (!user)
      res
        .status(400)
        .json({ success: false, message: "Incorrect username or password" });

    const checkPassword = bcrypt.compareSync(password, user.password);
    if (!checkPassword)
      res
        .status(400)
        .json({ success: false, message: "Incorrect username or password" });

    const accessToken = jwt.sign({ userId: user['_id'] }, "sha");
    res.json({ success: true, accessToken });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});


module.exports = UserRouter;
