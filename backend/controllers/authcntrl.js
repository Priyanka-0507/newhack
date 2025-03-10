const User=require('../models/user');
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken')

 exports.register=async(req,res)=>{
    const {username,password}=req.body;
    try{
        const user=new User({username,password});
        await user.save();
        res.status(201).json({message:'User registereed successfully'});

    }
    catch(err){
        res.status(400).json({error:err.message});
        }
    };
    exports.login=async(req,res)=>{
        const {username,password}=req.body;
        try{
            const user=await User.findOne({username});
            if(!user) throw new Error ('invalid username');
            const ismatch=await bcrypt.compare(password,user.password);
            if(!ismatch) throw new Error ('invalid credentials');
            const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ token });
        }
        catch (err){
            res.status(400).json({error: err.message});

        }
    };
