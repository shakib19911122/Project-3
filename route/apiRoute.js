const router = require("express").Router();
const db = require("../models");
// const User = require("../models/user");
// const Delivery = require("../models/delivery");
const passport = require("passport");
const bcrypt = require('bcrypt');


router.post("/api/login", (req, res) => {
  passport.authenticate("local", (err, user) => {
    if (err) throw err;
    if (!user) res.send("No User Exists");
    else {
      req.logIn(user, (err) => {
        if (err) throw err;
        res.send({message: "Successfully Authenticated", user: req.user})
        console.log(req.user);
      });
    }
  })(req, res);
});
router.post("/api/signup", (req, res) => {
  // console.log(req.body)
  User.findOne({ email: req.body.email }, async (err, doc) => {
    if (err) throw err;
    if (doc) res.send("User Already Exists");
    if (!doc) {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);

      const newUser = new User({
        email: req.body.email,
        password: hashedPassword,
        userType: req.body.userType
      });
      await newUser.save();
      res.send("User Created");
    }
  });
});
router.get("/api/sender", (req, res) => {
  res.send(req.user.id); // Method 1: using the authenticated user that is given to us by passport. User a route like /api/sender for this method.
  console.log(req.params.id) // Method 2: using a query paramter, in this case /api/sender/12345678 would make req.params.id be 12345678. Use a route like /api/sender/:id for this method.
  
});
router.get("/api/driver", (req, res) => {
  res.send(req.user); 
});

// -----------------------------delivery route--------------------------

router.post("/api/delivery", (req,res)=>{
  db.delivery.update({
    pickUpAddress: req.body.pickUpAddress,
    pickUpPostcode: req.body.pickUpPostcode,
    deliveryAddress: req.body.deliveryAddress,
    deliveryPostcode: req.body.deliveryPostcode,
    AdditionalInfo: req.body.AdditionalInfo,
        }).then(() => {
          res.json("success")
        }).catch (err => {
          res.status(401).json(err);
      });
  });

  router.get("/api/delivery", (req,res)=>{
    db.delivery.find({}).then((data)=>{
      console.log(data)
      res.json(data);
    }). catch(err =>{
      res.status(401).json(err);
    });
  })



// -----------------------------End of delivery route --------------------------


// -----------------------------Job route --------------------------







// -----------------------------End of job route --------------------------




module.exports = router;