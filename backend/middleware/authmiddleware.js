const jwt=require('jsonwebtoken');
module.exports=(req,res,next)=>{
    const token=req.header('Authorization');
    if (!token) {
        res.redirect("/login");
        console.error("No token provided");
        return res.status(401).json({ error: "Access denied. No token provided." });
    }
    try{
        const actualToken = token.replace("Bearer ", ""); // Remove "Bearer" prefix
        console.log("Extracted token:", actualToken);
        const decoded=jwt.verify(actualToken,process.env.JWT_SECRET);
        req.userId=decoded.userId;
        next();
    }catch(err){
        console.error("Invalid token:", err.message);
        res.status(400).json({error:'Invalid token'});
    }
};