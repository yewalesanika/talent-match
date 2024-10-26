import {User} from "../models/user.model.js";
import bycrpt from "bcryptjs";
import jwt from "jsonwebtoken"

export const register = async (req,res)=>{
    try{
        const {fullname,email,phoneNumber,password,role} = req.body;
        if(!fullname|| !email || !phoneNumber || !password || !role){
            return res.status(400).json({
                message:"some feild is missing",
                success:false
            })
        }
        const user = await User.findOne({email});
        if(user)
        {
            return res.status(400).json({
                message:"User already exists",
                success:false
            })
        }
        const hashpassword = await bycrpt.hash(password,10);

        await User.create({fullname,email,phoneNumber,password:hashpassword,role})

        res.status(200).json({
            message:"Account created successfully",
            success:true
        })
    }
    catch(err)
    {
        console.log("resgister error ",err);
    }
}

export const login = async(req,res)=>{
    try{
        const {email,password,role} = req.body;
        if(!email || !password || !role)
        {
            return res.status(400).json({
                message:"some feild is missing",
                success:false
            })
        }

        let user = await User.findOne({email});
        if(!user)
        {
            return res.status(400).json({
                message:"Incorrect email or password",
                success:false
            })
        }
        const ispasswordmatch = bycrpt.compare(password, user.password);
        if(!ispasswordmatch)
        {
            return res.status(400).json({
                message:"Incorrect email or password",
                success:false
            })
        }

        if(role!= user.role)
        {
            return res.status(400).json({
                message:"Account dose not exist for current role",
                success:false
            })
        }

        user = {
            userId : user._id,
            fullname : user.fullname,
            email : user.email,
            phoneNumber : user.phoneNumber,
            role : user.role,
            profile : user.profile 
        }

        const tokenData = {
            userId : user.userId
        }
        const token = await jwt.sign(tokenData,process.env.SECRET_KEY,{expiresIn:'1d'});

        res.status(200).cookie("token",token,{maxAge:1*24*60*60*1000, httpOnly:true, sameSite:'strict'}).json({
            message:`Welcome back to TalentMatch ${user.fullname}`,
            user,
            success:true
        })
    }
    catch(err){
        console.log("login err ",err);
    }
}

export const logout = async(req,res)=>{
    try{
        return res.status(200).cookie("token"," ",{maxAge:0}).json({
            message:"You have been logged out successfully",
            success:true
        })
    }
    catch(err)
    {
        console.log("logout err ",err);
    }
}

export const updateProfile = async(req,res)=>{
    try {
        const {fullname,email,phoneNumber,bio,skills} = req.body;
        const file = req.file;

        let skillsArray;
        if(skills)
        {
            skillsArray = skills.split(',');
        }
        const userId = req.id; //middleware authentication

        let user = await User.findById(userId);
        if(!user)
        {
            return res.status(400).json({
                message:"user not found",
                success:false
            })
        }

        if(fullname) user.fullname = fullname
        if(email) user.email = email
        if(phoneNumber) user.phoneNumber = phoneNumber
        if(bio) user.bio = bio
        if(skills) user.skills = skillsArray
        
        await user.save()

        user = {
            userId : user._id,
            fullname : user.fullname,
            email : user.email,
            phoneNumber : user.phoneNumber,
            role : user.role,
            profile : user.profile 
        }

        const tokenData = {
            userId : user._id
        }
        const token = await jwt.sign(tokenData,process.env.SECRET_KEY,{expiresIn:'1d'});

        res.status(200).cookie("token",token,{maxAge:1*24*60*60*1000, httpOnly:true, sameSite:'strict'}).json({
            message:`Welcome back to TalentMatch ${user.fullname}`,
            user,
            success:true
        })

        res.status(200).json({
            message:"Profile updates successfully",
            success:true
        })
    } catch (err) {
        console.log("update err ",err);
    }
}