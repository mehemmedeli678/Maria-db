const db=require('../DataAccess/Db')
const BaseError=require('../ErrorHandle/baseError')
const httpstatus = require('http-status');
const SuccessResult=require('../Result/SuccessResult');
const SuccessDataResult = require('../Result/SuccessDataResult');

const add=async(req,res,next)=>{
    try {
        const {name,category_id}=req.body;
        const query=`INSERT INTO product (name,categoryId) VALUES ("${name}",${category_id})`
        const rows= await db(query);
        if(!rows.success) throw new Error(rows.message);
        res.send(new SuccessResult(200,"added"));
    } catch (error) {
        next(new BaseError(httpstatus.BAD_REQUEST,error.message,'ProductController/add'))
    }
}

const getByid=async(req,res,next)=>{
    try {
        const id=req.query.id;
        const query=`SELECT * FROM product pr LEFT join category ct on ct.id=pr.categoryId where pr.id=${id}`
        const rows= await db(query);
        if(!rows.success) throw new Error(rows.message)
        res.send(new SuccessDataResult(200,rows.data));
    } catch (error) {
        next(new BaseError(httpstatus.BAD_REQUEST,error.message,'ProductController/get'))
    }
}

const getAll=async(req,res,next)=>{
    try {
        const query=`SELECT pr.id,pr.name,pr.categoryId,ct.name as categoryName FROM product pr join category ct on pr.categoryId=ct.id `
        const rows= await db(query);
        if(!rows.success) throw new Error(rows.message)
        res.send(rows);
    } catch (error) {
        next(new BaseError(httpstatus.BAD_REQUEST,error.message,'ProductController/getall'))
    }
}

module.exports={getByid,add,getAll}