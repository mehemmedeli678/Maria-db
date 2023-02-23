const Result=require('./Result')
class ErrorResult extends Result{
    constructor(status,message){
        super(false,status)
        this.message=message
    }
}

module.exports=ErrorResult