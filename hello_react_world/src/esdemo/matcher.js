function _not(matchFn){
    function test(value){
        return ! matchFn(value);
    }
    return test;
}

export function any(...matchFunctions){
    return (value)=>{
      for(let matchFunction of matchFunctions)
          if(matchFunction(value))
              return true;
        
        return false;
    };
}

export function all(...matchFunctions){
    return (value)=>{
      for(let matchFunction of matchFunctions)
          if(!matchFunction(value))
              return false;
        
        return true;
    };
}

export const not=_not;
