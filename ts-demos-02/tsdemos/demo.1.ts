//optional parameter method


function table(value:number,times?:number){
    if(times===undefined)times=10;
    for(let i=1;i<=times;i++){
        console.log(`${value}*${i}`,value*i);
    }
}

table(19,10);
table(17,5);
table(18);