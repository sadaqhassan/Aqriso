import bcrypt  from 'bcryptjs'
import { theUser } from "../Models/user.model.js"
import jwt from 'jsonwebtoken'
//register
export const registerApi = async (req,res) => {
    const {name,email,password} = req.body

    if(!email || !password || !name){
        res.status(400).json({success:false,message:"! fill all inputs"})
    }

    try {
        const user = await theUser.findOne({email})

        if(user) {
            return res.status(400).json({success:false,message:"this user is exist"})
        }

        const hashed = await bcrypt.hash(password,10)

        const newUser = new theUser({
            name,
            email,
            password:hashed
        })

        newUser.save();

        return res.status(200).json({success:false, message:"register successFully"})
    } catch (error) {
        console.log(error.message)
        res.status(500).json({success:false, message:"server error"})
    }
}

//login

export const loginApi = async (req,res) => {
    const {email,password} = req.body

    if(!email || !password){
        
        res.status(400).json({success:false,message:"! fill all inputs"})
    }

    try {
        const user = await theUser.findOne({email})

        if(!user) {
            return res.status(400).json({success:false,message:"this user is exist"})
        }

        const compare = await bcrypt.compare(password,user.password)

        if(!compare) {
            return res.status(400).json({success:false,message:"this user is exist"})
        }

        const token = jwt.sign({id:user._id},process.env.JWT_SECRET, {expiresIn:"1d"})

        return res.cookie("accessToken",token,{httpOnly:true}).status(200).json({success:false, message:"register successFully"})
    } catch (error) {
        res.status(500).json({success:false, message:"server error"})
        console.log(error.message)
    }
}