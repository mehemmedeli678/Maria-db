const express=require('express')
const router=express.Router();

const ProductRoutes=require('./Router/ProductRouter')
const categoryRouter=require('./Router/CategoryRouter')
router.use('/api/product',ProductRoutes)
router.use('/api/category',categoryRouter)

module.exports=router;