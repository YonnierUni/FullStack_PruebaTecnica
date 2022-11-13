const TOKEN_KEY = "keyPrueba";
const jwt = require("jsonwebtoken");

 const checkIfAdmin = (req,res,next)=>{
    try {
        const token = req.headers["authorization"];
        jwt.verify(token, TOKEN_KEY, (err, user) => {
          if (err) {
            res.status(403).json({error:"You are not alowed to do that!"});
          } else {
            if ( user.token.rol.id == 1) {
              req.user = user;
              next();
            } else {
                res.status(403).json("You are not an admin!");
            }
          }
        });
      } catch (err) {
        res.status(403).json({err});
      }
}

 const checkIfUser = (req,res,next)=>{
  try {
    const token = req.headers["authorization"];
    jwt.verify(token, TOKEN_KEY, (err, user) => {
      if (err) {
        res.status(403).json({error:"You are not alowed to do that!"});
      } else {
        if (user.token.rol.id == 2 || user.token.rol.id == 1) {
          req.user = user;
          next();
        } else {
            res.status(403).json("You are not an admin!");
        }
      }
    });
  } catch (err) {
    res.status(403).json({err});
  }
}

module.exports = {checkIfSuperAdmin,checkIfAdmin,checkIfUser}