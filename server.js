const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const PORT = process.env.PORT || 3001;
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const session = require('express-session');
const bodyParser = require('body-parser');
const User = require("./models/user");
const passport = require('./config/passport');
const app = express();



// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/delivery",{
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
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
app.use(require("./route/apiRoute"))

//-------------------End of Middleware-------------------------


app.use(require("./route/apiRoute"));
app.get("/signup", (req, res) => {
  res.sendFile(__dirname+"/client/build/index.html")
})
// Serve up static assets (usually on heroku)
// if (process.env.NODE_ENV === "production") {
app.use(express.static("client/build"));
// }

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});