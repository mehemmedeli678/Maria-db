const Joi=require('joi')
const BaseError=require('../ErrorHandle/baseError')
const Errorresult=require('../Result/ErrorResult')

const Validate=async(req,res,next)=>{
    try {
        const product=req.body;
        const JoiSchema = Joi.object({
      
            name: Joi.string()
                      .min(5)
                      .max(30)
                      .required(),
            category_id:Joi.number().required()
        });
       const result= JoiSchema.validate(product);
       if(result.error) return res.send(new Errorresult(400,result.error.details[0].message));
       next();
    } catch (error) {
        next(new BaseError(400,error.message,"productValidation/add"))
    }
}

module.exports=Validate