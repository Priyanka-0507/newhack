const TaskEntry=require('../models/task');
exports.createtask=async(req,res)=>{
    const {title,description}=req.body;
    try{
        const entry= new TaskEntry({title, description,user: req.userId});
        await entry.save();
        res.status(201).json(entry);
    }catch (err){
        res.status(400).json({ error:err.message});
    }
}

exports.gettask=async(req,res)=>{
    try{
        console.log("User ID from token:", req.userId);
        const entries= await TaskEntry.find({user:req.userId});
        res.json(entries);
    }
    catch(err){
        res.status(400).json({error:err.message});
    }
};
exports.updatetask=async(req,res)=>{
    const {id}=req.params;
    const {title,description,completed}=req.body;
    try{
        const entry=await TaskEntry.findByIdAndUpdate(id,{title,description,completed},{new:true});
        res.json(entry);
    }catch(err){
        res.status(400).json({error:err.message});
    }
}
exports.deletetask=async(req,res)=>{
    const {id}=req.params;
    try{
        await TaskEntry.findByIdAndDelete(id);
        res.json({message:'Entry deleted successfully'});
    }catch(err){
        res.status(400).json({error:err.message});
    }
};