const restricted = (req, res, next) => {
  if (req.session && req.session.user) {
    next();
  } else {
    return res.status(401).json("You will not pass!");
  }
};

module.exports = restricted;
