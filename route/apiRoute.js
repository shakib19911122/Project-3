const router = require("express").Router();
const db = require("../models");
const User = require("../models/user");
const passport = require("passport")

router.get("/delivery", (req, res) => {
  // Use a regular expression to search titles for req.query.q
  // using case insensitive match. https://docs.mongodb.com/manual/reference/operator/query/regex/index.html
  db.DeliveryInfo.find({
    title: { $regex: new RegExp(req.query.q, 'i')}
  })
    .then(deliveries => res.json(deliveries))
    .catch(err => res.status(422).end());
});

router.post('/signup', (req, res, next) => {
  const { email, password } = req.body
  if (!email || !password) {
    return res.status(400).json({success: false})
  }

  User.save(req.body);
});

router.post('/login', (req, res, next) => {
  const { email, password } = req.body
  if (!email || !password) {
    return res.status(400).json({success: false})
  }

  // Authenticate the user using the credentials provided
  passport.authenticate('local', { session: true }, function (err, user) {
    if (err) {
      return res.status(400).json({success: false, err})
    }

    // When using passport with callback, we have to manually call req.login to set the Cookie
    req.login(user, async () => {
      res.json({ success: true, user })
    })
  })(req, res, next)
})

module.exports = router;