let input1  = document.getElementById("input1");
let input2  = document.getElementById("input2");
let buttonA = document.getElementById("add");
let buttonM = document.getElementById("Multiply");
let buttonS = document.getElementById("Subtract");
let buttonD = document.getElementById("Divide");
let para    = document.getElementById("para");
 
// this is for adding the number 
buttonA.addEventListener('click',function (){
    let a = parseFloat(input1.value);
    let b = parseFloat(input2.value);
    let result = sum(a , b);
    para.innerHTML= "your result is  : "+result;
    
});
function sum(a , b){
    return a + b;
};


// this is for multiplying the numers


buttonM.addEventListener('click',function (){
    let a = parseFloat(input1.value);
    let b = parseFloat(input2.value);
    let result = multiplying(a , b);
    para.innerHTML= "your result is  : "+result;
    
});
function multiplying(a , b){
    return a * b;
};

// this is for Subtracting the numbers 


buttonS.addEventListener('click',function (){
    let a = parseFloat(input1.value);
    let b = parseFloat(input2.value);
    let result = Subtracting(a , b);
    para.innerHTML= "your result is  : "+result;
    
});
function Subtracting(a , b){
    return a-b;
};

// this is for Divide two numers 

buttonD.addEventListener('click',function (){
    let a = parseFloat(input1.value);
    let b = parseFloat(input2.value);
    let result = Dividing(a , b);
    para.innerHTML= "your result is  : "+result;
    // para.style.color = "red"
    
});
function Dividing(a , b){
    return a / b;
};