const jwt = require("jwt-simple");
const User = require("../models/user");
const config = require("../config");

const tokenForUser = user => {
  const timestamp = new Date().getTime();
  return jwt.encode({ sub: user.id, iat: timestamp }, config.secret);
};

exports.signin = (req, res, next) => {
  //User has already their email and password auth's
  // We just need to give them a token
  res.send({ token: tokenForUser(req.user) });
};
exports.signup = (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res
      .status(422)
      .send({ error: "You must provide email and password" });
  }
  // See if a user with the given email exists
  User.findOne({ email: email }, (err, existingUser) => {
    if (err) {
      return next(err);
    }
    // If a user with email does exist, return an error
    if (existingUser) {
      return res.status(422).send({ error: "Email is in use" });
    }
    // If a user with eamil does NOT exist, create and save user record

    const user = new User({
      email: email,
      password: password
    });
    user.save(err => {
      if (err) {
        return next(err);
      }

      // Respond to request indicating the user was created
      res.json({ token: tokenForUser(user) });
    });
  });
};
