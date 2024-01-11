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

    if(!isNaN(a) && !isNaN(b) ){
        
        let result = sum(a , b);
      para.innerHTML= "your result is  : "+result;
    }
    else {
      alert("it looks like you have inserted the wrong data type");
      para.innerHTML="you must have to insert numbers"

    }
    
});
function sum(a , b){
    return a + b;
};


// this is for multiplying the numers


buttonM.addEventListener('click',function (){
    let a = parseFloat(input1.value);
    let b = parseFloat(input2.value);

    if(!isNaN(a) && !isNaN(b) ){

        let result = multiplying(a , b);
    para.innerHTML= "your result is  : "+result;
      
    }
    else {
      alert("it looks like you have inserted the wrong data type");
      para.innerHTML="you must have to insert numbers"

    }


    
    
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







//   let inputmain =  document.getElementById("inputmain");
//   let  =  document.getElementById(" ");
//   let  =  document.getElementById(" ");
//   let  =  document.getElementById(" ");
//   let  =  document.getElementById(" ");
//   let  =  document.getElementById(" ");
//   let  =  document.getElementById(" ");
//   let  =  document.getElementById(" ");
//   let  =  document.getElementById(" ");

let buttonRed = document.getElementsByClassName("butn")
let Display = '';
let output = false;

function appendToDisplay(value) {
    if (output === 2 || output) {
        Display = value;
}
else {
    Display += value;
}
result = false;
// here we mentioned the updateDisplay() to display the values of 
// appendToDisplays
updateDisplay();
}


// in the bottom code we made a function to 
// display what we select on p tag
function updateDisplay() {
    const displayelement= document.getElementById("display");
    displayelement.innerHTML = Display;
}


function calculateResult(){
    try{
        const result = eval(Display);
        Display += `<br>  ${result}`;
        updateDisplay();
    }
    catch(error){
        Display += "<br> Error";
        updateDisplay();
    }
    output = true;
}




function clearLastElement(){

   Display = Display.slice(0 ,-1);

 if(Display === "1"){
    Display ="";
 }
 // here we mentioned the updateDisplay() to display the values of 
// clearLastElement
 updateDisplay();
}


function clearDisplay() {
    
    Display= "";
// here we mentioned the updateDisplay() to display the values of 
// Display nothing same as clear the screen
    updateDisplay();
}




window.addEventListener("resize", handleOverflow);
handleOverflow();










  
    
//  let container = document.querySelector("#full-Calc");

// for( let i = 0; i <= 2 ; i++){
//     container.innerHTML +=  container.innerHTML

// };





//     // task 3 table of 21 
// let loop = document.getElementById("loop");
// let mmm  = document.getElementById("mmm");

//    for(let i = 1 ; i <= 20 ; i++){
//     // --Working
//     console.log('21 *', i,'=', i*21)
//     mmm.innerHTML += `21 * ${i} = ${i*21}<br>`
//     // not working
//     // mmm.innerHTML += '21 *'${i},'=', ${i*21};
// }















//practice for COnditional statements



// let prompts = prompt("write your marks ");


// if(prompts >= 80 && prompts <= 100){
//     console.log('your grade is A')
// }

// else if(prompts >= 70 && prompts <= 89){
//     console.log('Your Grade is B')

// }
// else if(prompts >= 60 && prompts <= 69){
//     console.log('Your Grade is C')

// }
// else if(prompts >= 50 && prompts <= 59){
//     console.log('Your Grade is D')

// }
// else if(prompts >= 0 && prompts <= 49){
//     console.log('Your Grade is F')

// }
// else {
//     console.log('input marks between 0 to 100');
// }