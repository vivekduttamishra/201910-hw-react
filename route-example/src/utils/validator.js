
export class Validator{

    constructor(model){
        this.model=model;
        this.errors={}
    }

    addError(field, userErrorMessage=null,defaultErrorMessage='Error'){
        let error=userErrorMessage?userErrorMessage:defaultErrorMessage;
        this.errors[field]=error;
        return this;
    }

    isRequired(field, errorMessage=null){
        var value= this.model[field];
        if(value===null || value===undefined || value.toString().trim()===''){
            this.addError(field,errorMessage,`Required : ${field}`);
        }
        return this;
    }

    areRequired(... fields){
        for(let field of fields){
            this.isRequired(field);
        }

        return this;
    }

    inRange(field,min=0,max=null,errorMessage=null){
        let error=null;
        try{
            let value=parseFloat(this.model[field]);
            if(min && value<min)
               return this.addError(field,errorMessage,`${field} should be at least ${min}`);
            if(max && value>max)
                return this.addError(field,errorMessage,`${field} should not be greater than ${max}`);
        }catch{
            return this.addError(field,errorMessage,`${field} should be a number`);
        }

        return this;
    }

    stringLengthRange(field,min=0,max=null,errorMessage=null){
        let value=this.model[field];
        if(value===null || value===undefined )
            return this;
        let len=value.toString().length;

        if( min && len<min)
            return this.addError(field,errorMessage,`${field} should be min ${min} chars`);

        if(max && len>max)
            return this.addError(field,errorMessage,`${field} should be max ${max} chars`);

        return this;
    }

    validateField(field, fnCustom,errorMessage=null){
        let value=this.model[field];
        let error=fnCustom(value,this.model);
        if(error)
            return this.addError(field,errorMessage,error);

        return this;
    }

    areEqual(field1,field2, errorMessage=null){
        let v1=this.model[field1];
        let v2=this.model[field2];
        if(v1!==v2){
            let error=`${field1} and ${field2} are not equal`;
            this.addError(field1,error);
            this.addError(field2,error);
        }

        return this;
    }

    getError(){
        return this.errors;
    }




}