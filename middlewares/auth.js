import jwt from 'jsonwebtoken'

export const isLogged = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res.json("You are not logged in");
  }
  try {
    const verified = jwt.verify(token, "secret");
    if (!verified) {
      res.json("Invalid token");
    }
    req.user = verified;
    next()
  } catch (error) {
    console.log(error);
  }
};


export const checkAdmin = (req, res, next) => {
  if (req.user?.role !== 'admin') {
    return res.json({ message: "Admins only" });
  }
  next();
};
export const checkStaff = (req, res, next) => {
  if (req.user?.role !== 'staff') {
    return res.json({ message: "Admins only" });
  }
  next();
};