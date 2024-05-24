const jwt = require("jsonwebtoken");

const createToken = async (data) => {
    const token = await jwt.sign(data, process.env.SECRET_TOKEN,{
        issuer: "localhost",
        expiresIn: process.env.EXPIRES_IN
    })
    return token;
}

const verifyToken = async (req,res,next) => {
    const headerToken = req.headers.authorization && req.headers.authorization.startsWith("Bearer ");
    if(!headerToken) return res.status(401).json({message:"Unauthorized please log in"});

    const token = req.headers.authorization.split(" ")[1]
    await jwt.verify(token, process.env.SECRET_TOKEN, (error, decode) => {
        if(error || !decode) res.status(401).json({message:"Invalid token"});     
        req.user = decode;
        next();
    })
}

module.exports = { createToken, verifyToken }