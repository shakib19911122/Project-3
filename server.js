const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const PORT = process.env.PORT || 3001;
const passport = require("passport");
const passportLocal = require('passport-local').Strategy;
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const session = require('express-session');
const bodyParser = require('body-parser');

const app = express();



// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/delivery",{
  useNewUrlParser: true,
  useUnifiedTopology: true,
}, ()=>{
  console.log("Mongoose Connected")
});

// Define middleware here
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors({
  origin: "http://localhost:3000", // location where react app connecting to
  credentials: true
}))
app.use(session({
  secret : "secretcode",
  resave: true,
  saveUninitialized: true,
}));
app.use(cookieParser("secretcode"))
app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);
//-------------------End of Middleware-------------------------


// app.use(require("./routes/api/index"));
// Serve up static assets (usually on heroku)
// if (process.env.NODE_ENV === "production") {
app.use(express.static("client/build"));
// }
// Add routes
// app.post("/login", (req,res) =>{
//   console.log(res.body);
// })
// app.post("/signup", (req,res) =>{
//   console.log(res.body);
// })
// app.post("/user", (req,res) =>{
//   console.log(res.body);
// })
app.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) throw err;
    if (!user) res.send("No User Exists");
    else {
      req.logIn(user, (err) => {
        if (err) throw err;
        res.send("Successfully Authenticated");
        console.log(req.user);
      });
    }
  })(req, res, next);
});
app.post("/signup", (req, res) => {
  User.findOne({ username: req.body.username }, async (err, doc) => {
    if (err) throw err;
    if (doc) res.send("User Already Exists");
    if (!doc) {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);

      const newUser = new User({
        username: req.body.username,
        password: hashedPassword,
      });
      await newUser.save();
      res.send("User Created");
    }
  });
});
app.get("/user", (req, res) => {
  res.send(req.user); // The req.user stores the entire user that has been authenticated inside of it.
});
//-----------------------End of Routes----------------------------------

// app.get('/packages', function(req, res) {
//   res.send([
//     {
//       name: 'Package 1'
//     },
//     {
//       name: 'Package 2'
//     }
//   ]);
// })

// app.post('/packages', function(req, res) {
//   res.send('Saving successful');
// })




// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});