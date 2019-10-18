//optional parameter method


function table09(value:number,times?:number){
    if(times===undefined)times=10;
    for(let i=1;i<=times;i++){
        console.log(`${value}*${i}`,value*i);
    }
}

table09(19,10);
table09(17,5);
table09(18);