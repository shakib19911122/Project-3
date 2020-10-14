const router = require("express").Router();
// const db = require("../models");
const User = require("../models/user");
const passport = require("passport")


router.post("/login", (req, res) => {
  passport.authenticate("local", (err, user) => {
    if (err) throw err;
    if (!user) res.send("No User Exists");
    else {
      req.logIn(user, (err) => {
        if (err) throw err;
        res.send("Successfully Authenticated");
        console.log(req.user);
      });
    }
  })(req, res);
});
router.post("/signup", (req, res) => {
  // console.log(req.body)
  User.findOne({ email: req.body.email }, async (err, doc) => {
    if (err) throw err;
    if (doc) res.send("User Already Exists");
    if (!doc) {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);

      const newUser = new User({
        email: req.body.email,
        password: hashedPassword,
      });
      await newUser.save();
      res.send("User Created");
    }
  });
});
router.get("/senderui", (req, res) => {
  res.send(req.user); // The req.user stores the entire user that has been authenticated inside of it.
});



module.exports = router;