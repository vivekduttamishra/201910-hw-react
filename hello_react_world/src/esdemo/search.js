

var search=function(matchFunction,values){
    let result=[];
    for(let value of values){
        if(matchFunction(value))
            result.push(value);
    }
    return result;
};

export default search;
