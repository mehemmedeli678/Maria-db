const db=require('../DataAccess/Db')
const BaseError=require('../ErrorHandle/baseError')
const httpstatus = require('http-status');
const SuccessResult=require('../Result/SuccessResult');
const SuccessDataResult = require('../Result/SuccessDataResult');

const add=async(req,res,next)=>{
    try {
        const {name}=req.body;
        const query=(`INSERT INTO category (name) VALUES ("${name}")`)
        const rows= await db(query);
        if(!rows.success) throw new Error(rows.message);
        res.send(new SuccessResult(200,"added"));
    } catch (error) {
        next(new BaseError(httpstatus.BAD_REQUEST,error.message,'categoryController/add'))
    }
}

const remove=async(req,res,next)=>{
    try {
        const id=req.query.id;
        const query=(`DELETE FROM category WHERE id=${id}`);
        const rows= await db(query);
        if(!rows.success) throw new Error(rows.message);
        res.send(new SuccessResult(200,"removed"));
    } catch (error) {
        next(new BaseError(httpstatus.BAD_REQUEST,error.message,'CategoryController/remove'))
    }
}

const getAll=async(req,res,next)=>{
    try {
        const query=(`SELECT * FROM category`)
        const rows= await db(query);
        if(!rows.success) throw new Error(rows.message);
        res.send(new SuccessDataResult(200,rows.data));
    } catch (error) {
        next(new BaseError(httpstatus.BAD_REQUEST,error.message,'CategoryController/getall'))
    }
}
const get=async(req,res,next)=>{
    try {
        const id=req.query.id;
        const query=(`SELECT * FROM category WHERE id=${id}`)
        const rows= await db(query);
        if(!rows.success) throw new Error(rows.message);
        res.send(new SuccessDataResult(200,rows.data[0]));
    } catch (error) {
        next(new BaseError(httpstatus.BAD_REQUEST,error.message,'CategoryController/get'))
    }
}

const update=async(req,res,next)=>{
    try {
            const {id,name}=req.body;
            const query=`UPDATE category SET name="${name}" WHERE id=${id}`
            const rows= await db(query);
            if(!rows.success) throw new Error(rows.message);
            res.send(new SuccessResult(200,"update"));
    } catch (error) {
        next(new BaseError(httpstatus.BAD_REQUEST,error.message,'CategoryController/update'))
    }
}

module.exports={add,remove,getAll,get,update}