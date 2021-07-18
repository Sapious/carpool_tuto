module.exports = function (req, res, next) {
  if (req.verifiedUser.isDriver) {
    next();
  } else {
    return res.status(403).json("you are not a driver");
  }
};
