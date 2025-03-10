const jrnalentry=require('../models/journalent');
exports.createentry=async(req,res)=>{
    const {title,content}=req.body;
    try{
        const entry= new jrnalentry({title, content,user: req.userId});
        await entry.save();
        res.status(201).json(entry);
    }catch (err){
        res.status(400).json({ error:err.message});
    }
}

exports.getentry=async(req,res)=>{
    try{
        const entries= await jrnalentry.find({user:req.userId});
        res.json(entries);
    }
    catch(err){
        res.status(400).json({error:err.message});
    }
};
exports.updateentry=async(req,res)=>{
    const {id}=req.params;
    const {title,body}=req.body;
    try{
        const entry=await jrnalentry.findByIdAndUpdate(id,{title,content},{new:true});
        res.json(entry);
    }catch(err){
        res.status(400).json({error:err.message});
    }
}
exports.deleteentry=async(req,res)=>{
    const {id}=req.params;
    try{
        await jrnalentry.findByIdAndDelete(id);
        res.json({message:'Entry deleted successfully'});
    }catch(err){
        res.status(400).json({error:err.message});
    }
};