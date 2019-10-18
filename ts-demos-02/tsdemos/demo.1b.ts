//optional parameter method ES2015
function table(value:number,times=10){
    
    for(let i=1;i<=times;i++){
        console.log(`${value}*${i}`,value*i);
    }
}

table(19,10);
table(17,5);
table(16); //times defaults to 10