const Result=require('./Result')
class SuccessResult extends Result{
    constructor(status,message){
        super(true,status)
        this.message=message
    }
}

module.exports=SuccessResult