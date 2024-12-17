
const users = require('../Models/userSchema')
const jwt = require('jsonwebtoken')

//register logic
exports.registerAPI=async(req,res)=>{
    console.log("Inside the register APi");
    const {username,email,password}= req.body
    const existingUser = await users.findOne({email})
    if(existingUser){
        res.status(402).json({message:"User Already Existing.."})
    }
    else{
        const newUser = new users({
            username:username,
            email:email,
            password:password,
            github:"",
            linkedIn:"",
            profilePic:""
        })
        await newUser.save()
        res.status(200).json("Register successful...")
    }
    
}
//login logic
exports.loginAPI=async(req,res)=>{
    console.log("Inside the login APi");
    const {email,password}= req.body
    try{
        const existingUser = await users.findOne({email,password})
        if(existingUser){
           

            const token = jwt.sign({userId:existingUser._id},process.env.jwtKey)
            console.log(token);
            
            res.status(200).json({currentUser:existingUser,token})
            
        }
        else{
        
            res.status(404).json("Incorrect email or password")
        }
    }
    catch(err){
        res.status(401).json(err)
    }
   
    
}

