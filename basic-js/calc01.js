var consoleDiv=document.getElementById('console');
var numberTextBox=document.getElementById('number');
var numberListBox=document.getElementById('numberList');

var numbers=[];

function consoleWrite(text){
    consoleDiv.innerHTML+=(text+'<br/>');
}

function addToList(){
    var value=parseFloat(numberTextBox.value);
    //if(value){
    if(!isNaN(value)){
        numbers.push(value);
        numberListBox.innerHTML+=('<li>'+value+'</li>');
    }       
    else{
        consoleWrite('Invalid Input '+numberTextBox.value);
        
    }
}

function sum(){
    //console.log('calculating the sum of values');
    var result=0;
    for(var i=0;i<numbers.length;i++){
        result+=numbers[i];
    }
    
    consoleWrite('sum is '+result);
}

function average(){
    var result=sum()/numbers.length;
    consoleWrite('average is '+result);
}

function reset(){
    numbers=[]; //reset internal state
    clear(); //clear the ui
}

function clear(){                
    consoleDiv.innerHTML='';
    numberListBox.innerHTML='';
    numberTextBox.value='';
}
//document.getElementById('sumButton').onclick=sum;
