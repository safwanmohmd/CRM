import jwt from 'jsonwebtoken'

export const isLogged = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res.json("You are not logged in");
  }
  try {
    const verified = jwt.verify(token, process.env.SECRET);
    if (!verified) {
      res.json("Invalid token");
    }
    req.user = verified;
    next()
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Invalid or expired token",
      error: error.message
    });
  }
};


export const checkAdmin = (req, res, next) => {
   if (req.user?.role !== 'admin' && req.user.role !== 'staff') {
    return res.status(403).json({ message: "Admins or staff only" });
  }
  next();
};
export const checkStaff = (req, res, next) => {
  if (req.user?.role !== 'staff') {
    return res.json({ message: "staff only" });
  }
  next();
};