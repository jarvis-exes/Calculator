var buttons = document.getElementsByTagName('button');
var display = document.querySelector('.display');


var operand1 = 0;
var operand2 = null;

for(var i=0; i<buttons.length; i++){
    buttons[i].addEventListener('click',dataEntry);
}
    
function dataEntry(){
    var value = this.getAttribute('value');
    console.log(value);
        
    if(value=='='){
        operand1 = display.innerText;
        console.log(operand1);
        operand1=operand1.replaceAll('x','*');
        console.log(operand1);
        operand2=eval(operand1);
        display.innerText = operand2;
        console.log(operand2);
        
    }
    else if(value=='AC'){
        display.innerText = '';
        operand1=0;
        operand2=null;
    }
    else if(value=='C'){
        var str = display.innerText;
        console.log(str);
        str= str.slice(0,-1);
        display.innerText = str;  
    }
    else{
        display.innerText += value;
    }
}



