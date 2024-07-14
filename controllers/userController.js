// with the help of asyncHandler middleware we don't need to manually handle using try-catches
// it all routes to our own error handler midleware 
import asyncHandler from "express-async-handler";
import User from '../models/userModel.js';
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

//@desc Register User
//@route Get /api/v1/users/register
//@access Public
const registerUser = asyncHandler(async (req, res)=>{
    const {username, email, password} = req.body;
    if(!username || !email || !password) {
        res.status(400);
        throw new Error("All fields are mandatory");
    }
    const availableUser = await User.findOne({email});
    if(availableUser) {
        res.status(400);
        throw new Error("User already registered under this email.");
    }

    //password hashing
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("hashedPassword : "+hashedPassword);
    
    //create user 
    const savedUser = await User.create({
        username,
        email,
        password: hashedPassword
    })
    console.log(`User created ${savedUser.email}`);

    if(savedUser){
        res.status(201).json({_id: savedUser.id, email: savedUser.email});
    }else{
        res.status(400);
        throw new Error("Aser data is not valid.");
    }
});


//@desc Login User
//@route Get /api/v1/users/login
//@access Public
const loginrUser = asyncHandler(async (req, res)=>{
    const {email, password} = req.body;

    const user = await User.findOne({email});
    
    //compare user 
    if(user && (bcrypt.compare(password, user.password))){
        const accessToken = jwt.sign(
            {
                username : user.username,
                email: user.email,
                id: user.id
            },
            process.env.ACCESS_TOKEN_SECRET,
            {expiresIn:"30m"}
        );
        res.status(200).json({accessToken})
    }else {
        res.status(401);
        throw new Error("username or password is incorrect.");
    }
});


//@desc Current User
//@route Get /api/v1/users/register
//@access Private
const currentUser = asyncHandler(async (req, res)=>{
    res.json(req.user);
});


export {registerUser, loginrUser, currentUser};