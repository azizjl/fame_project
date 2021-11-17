const express = require("express");
const { registerUser, userLogin } = require("../controllers/user.controller");
const { registerRules, validator } = require("../middlewares/validator");
const multer = require("multer");
const User = require("../models/user");

const passport = require("passport");
const isAuth = require("../middlewares/passport-setup");

const Router = express.Router();

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/profilImages");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

var upload = multer({ storage: storage });

Router.post("/register", registerRules(), validator, registerUser);
Router.post("/login", userLogin);

Router.get("/currentuser", isAuth(), function (req, res) {
  req.user.password = undefined;
  res.json(req.user);
});

Router.post(
  "/update-image",
  isAuth(),
  upload.single("file"),
  async function (req, res) {
    const q = await User.updateOne(
      { email: req.body.userEmail },
      {
        $set: {
          photo: `http://localhost:5000/profilImages/${req.file.originalname}`,
        },
      }
    );
    res.json(q);
  }
);

Router.get("/usersImages", async (req, res) => {
  const q = await User.find();
  res.json(q);
});

module.exports = Router;
