const express=require('express');
const {add, getAll,remove,get, update}=require('../Controller/CategoryController')
const Validate=require('../Validation/ProductValidation')
const router=express.Router();

router.get('/get',get)
router.post('/add',add)
router.get('/getall',getAll)
router.post('/remove',remove)
router.put('/update',update)


module.exports=router;