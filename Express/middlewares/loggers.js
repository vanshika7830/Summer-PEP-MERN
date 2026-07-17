 const loggers = (req,res,next) => {
    console.log(`Request from ${req.method}`);
    next();
    
}

module.exports = {
    loggers
};