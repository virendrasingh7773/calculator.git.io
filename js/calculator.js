function calculate(){
    let x = document.getElementById("demo").value;
    let y = x.value = eval(x) 
    if(x==''){
        document.getElementById('demo').value += ''
    }
    else{
        document.getElementById('demo').value = y;
    }
}
function digitAC(){
    document.getElementById('demo').value = '';
}
function digitdel(){
    let x = document.getElementById("demo").value;
    document.getElementById("demo").value = x.substring(0, x.length-1);
}
function digitreminder(){
    let x = document.getElementById("demo").value;
    if(x==''){
        document.getElementById('demo').value += ''
    }
    else{
        document.getElementById('demo').value += '%'
    }
}
function digit7(){
    document.getElementById('demo').value += '7';
}
function digitdivide(){
    let x = document.getElementById("demo").value;
    if(x==''){
        document.getElementById('demo').value += ''
    }
    else{
        document.getElementById('demo').value += '/'
    }
}
function digit8(){
    document.getElementById('demo').value += '8'
}
function digit9(){
    document.getElementById('demo').value += '9'
}
function digitmultiply(){
    let x = document.getElementById("demo").value;
    if(x==''){
        document.getElementById('demo').value += ''
    }
    else{
        document.getElementById('demo').value += '*'
    }
}
function digit4(){
    document.getElementById('demo').value += '4'
}
function digit5(){
    document.getElementById('demo').value += '5'
}
function digit6(){
    document.getElementById('demo').value += '6'
}
function digitmines(){
    document.getElementById('demo').value += '-'
}
function digit1(){
    document.getElementById('demo').value += '1'
}
function digit2(){
    document.getElementById('demo').value += '2'
}
function digit3(){
    document.getElementById('demo').value += '3'
}
function digitplus(){
    let x = document.getElementById("demo").value;
    if(x==''){
        document.getElementById('demo').value += ''
    }
    else{
        document.getElementById('demo').value += '+'
    }
}
function digit0(){
    document.getElementById('demo').value += '0'
}
function digit00(){
    document.getElementById('demo').value += '00'
}
function digitdot(){
    document.getElementById('demo').value += '.'
}