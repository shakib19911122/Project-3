// const LocalStrategy = require('passport-local').Strategy
// const bcrypt = require('bcrypt')
// const mongoose = require("mongoose")
// const UserModel = mongoose.model('User')


// module.exports = function (passport) {
//   // used to serialize the user for the session
//   passport.serializeUser(function (user, done) {
//     done(null, user._id)
//   })

//   // used to deserialize the user
//   passport.deserializeUser(async function (id, done) {
//     await UserModel.findById(id)
//       .then((res) => {
//         done(null, res)
//       })
//       .catch((err) => done(err, null))
//   })

//   passport.use(
//     new LocalStrategy(
//       {
//         // Passport uses "username" and "password", so we override with the names that we want those fields to have
//         usernameField: 'email',
//         passwordField: 'password',
//         passReqToCallback: true, // allows us to pass back the entire request to the callback
//       },

//       /**
//        * This is the Auth handler. We check for a valid user phone and authenticate if found
//        */
//       async function (req, email, password, done) {
//         const user = await UserModel.findOne({ email: email })

//         // Check for valid user
//         if (!user) {
//           return done('Invalid credentials', false)
//         }
//         // Check for valid auth
//         const passwordMatch = await bcrypt.compare(password, user.password)
//         if (!passwordMatch) {
//           return done('Invalid credentials', false)
//         }

//         // All is well, return successful user
//         return done(null, user)
//       }
//     )
//   )
// }
const User = require("./user");
const bcrypt = require("bcryptjs");
const localStrategy = require("passport-local").Strategy;

module.exports = function (passport) {
  passport.use(
    new localStrategy((username, password, done) => {
      User.findOne({ username: username }, (err, user) => {
        if (err) throw err;
        if (!user) return done(null, false);
        bcrypt.compare(password, user.password, (err, result) => {
          if (err) throw err;
          if (result === true) {
            return done(null, user);
          } else {
            return done(null, false);
          }
        });
      });
    })
  );

  passport.serializeUser((user, cb) => {
    cb(null, user.id);
  });
  passport.deserializeUser((id, cb) => {
    User.findOne({ _id: id }, (err, user) => {
      const userInformation = {
        username: user.username,
      };
      cb(err, userInformation);
    });
  });
};