module.exports = function (req, res, next) {
  if (req.verifiedUser.isActive) {
    next();
  } else {
    return res.status(403).json("you are not an active user");
  }
};
