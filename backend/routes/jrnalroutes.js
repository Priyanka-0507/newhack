const express=require('express');
const {createentry,getentry,updateentry,deleteentry}=require('../controllers/jrnalcntrl')
const authmiddleware=require('../middleware/authmiddleware');
const router=express.Router();
router.use(authmiddleware);
router.post('/',createentry);
router.post('/',getentry);
router.put('/:id',updateentry);
router.delete('/:id',deleteentry);
module.exports=router;