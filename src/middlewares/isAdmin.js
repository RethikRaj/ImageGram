export const isAdmin = async (req,res, next)=>{
    try{
        if(req.user.role !== "admin"){
            return res.status(403).json({
                success: false,
                message: "You are not authorized to access this resource"
            })
        }
        next();
    }catch(error){
        console.log(error);
    }
}