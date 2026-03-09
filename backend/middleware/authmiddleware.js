const jwt = require("jsonwebtoken");

exports.protect = (req, res, next) => {
  let token = req.headers.authorization;

  // if token not present
  if (!token) {
    return res.status(401).json({ msg: "No token provided" });
  }

  try {
    token = token.split(" ")[1];

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decoded;

    next();
  } catch (error) {
    return res.status(401).json({ msg: "Invalid token" });
  }
};