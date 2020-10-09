const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3001;
const passport = require("passport");



// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors())
// app.use(require("./routes/api/index"));
// Serve up static assets (usually on heroku)
// if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
// }
// Add routes, both API and view



// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/delivery");
const user = require("./models/user");
app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);

app.get('/packages', function(req, res) {
  res.send([
    {
      name: 'Package 1'
    },
    {
      name: 'Package 2'
    }
  ]);
})

app.post('/packages', function(req, res) {
  res.send('Saving successful');
})
// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});