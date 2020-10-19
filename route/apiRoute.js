const router = require("express").Router();
const db = require("../models");
const User = require("../models/user");
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
  res.send(req.user.id); 
});

router.get("/api/driver", (req, res) => {
  res.send(req.user); 
});

// -----------------------------delivery route--------------------------

router.post("/api/delivery", (req,res)=>{
  //console.log(req.body)
  db.Delivery.create(req.body)
    .then((dbDelivery) => {
          res.json(dbDelivery)
        }).catch (err => {
          res.json(err);
      });
  });


  router.get("/api/delivery", (req,res)=>{
    //console.log("get API")
    db.Delivery.find({}).then((data)=>{
      //console.log(data)
      res.json(data);
    }). catch(err =>{
      res.status(401).json(err);
    });
  })

  router.put("/api/delivery", (req,res)=>{
    console.log("put API")
    console.log(req.body);
    for(const [id, status] of Object.entries(req.body)) {
      db.Delivery.findByIdAndUpdate(id, {
        deliveryStatus: status
      }).then((data)=>{
        console.log(data)
        res.json(data);
      }). catch(err =>{
        res.status(401).json(err);
      });
    }
  })



// -----------------------------End of delivery route --------------------------


// -----------------------------Job route --------------------------
router.post("/api/job", (req,res)=>{
  console.log(req.body)
  db.Job.create(req.body)
    .then((dbJob) => {
          res.json(dbJob)
        }).catch (err => {
          res.json(err);
      });
  });


  router.get("/api/job", (req,res)=>{
    console.log("get API")
    db.Job.find({}).then((data)=>{
      console.log(data)
      res.json(data);
    }). catch(err =>{
      res.status(401).json(err);
    });
  })


// -----------------------------End of job route --------------------------




module.exports = router;