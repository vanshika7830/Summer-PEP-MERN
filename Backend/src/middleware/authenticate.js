import dotenv from 'dotenv';
import jwt from 'jsonwebtoken'; 
dotenv.config();
export const authenticate = (req,res,next) => {
    let toeken;
    try{
        if(!req.headers.authorization || !req.headers.authorization.startsWith("Bearer")){
            return res.status(401).json({
                message: "Unauthorized access"
            })
        }
        token = req.headers.authorization.split(" ")[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = User.findById(decoded.id).select("-password");
        next();
    }
    catch(err){
        return res.status(401).json({
            message: "Invalid or expired token"
        })
    }
}