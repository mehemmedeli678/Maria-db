const Result=require('./Result')
class SuccessDataResult extends Result{
    constructor(status,data){
        super(true,status)
        this.data=data??null
    }
}

module.exports=SuccessDataResult