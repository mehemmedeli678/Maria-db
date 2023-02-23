const express=require('express');
const {getByid, add, getAll}=require('../Controller/ProductController')
const Validate=require('../Validation/ProductValidation')
const router=express.Router();


router.get('/get',getByid)
router.post('/add',Validate,add)
router.get('/getall',getAll)


module.exports=router;