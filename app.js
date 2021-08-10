//calculator

//getting elements
const screen = document.getElementById("result");
const numbers = document.querySelector(".number-box");
const operators = document.querySelector(".operator-box");
const equalSing = document.getElementById("sinalIgual");
const clear = document.getElementById("limpar");


function clearScreen(){
    numbers.addEventListener('click', function(e){
        //clear screen
        if (e.target.innerHTML == "C") {
            screen.innerHTML = "";
        }
    });
}

//writing numbers on screen
numbers.addEventListener('click', function(e){
    let actualNumber = e.target.innerHTML;

    if (screen.innerHTML == "") {
        screen.innerHTML = actualNumber;
    } else {
        screen.innerHTML = screen.innerHTML + actualNumber;
    }

    //clear screen
    clearScreen();
});

//adding operators
operators.addEventListener('click', function(e){
    let actualNumber = screen.innerHTML;

    //check if screen is empty
    if(actualNumber != "") {
        screen.innerHTML = actualNumber + e.target.innerHTML;
    } else {
        screen.innerHTML = "";
    }
    
    //check if last sign is a number 
    if((actualNumber.substring(actualNumber.length - 1)) == "+" || (actualNumber.substring(actualNumber.length - 1)) == "-" || (actualNumber.substring(actualNumber.length - 1)) == "x" || (actualNumber.substring(actualNumber.length - 1)) == "÷") {
       screen.innerHTML = actualNumber; 
    } else {
        screen.innerHTML = actualNumber + e.target.innerHTML;
    }
});

//calculating 
equalSing.addEventListener('click', function(e){
    //getting equation from screen
    const actualNumber = screen.innerHTML;  

    //cleaning screen
    screen.innerHTML = "";

    //spliting numbers and operators
    let elements = actualNumber.split("");

    //getting only numbers
    const numberElements = [];
    const operatorsElements = [];
    const indexElements = [];

    //MODIFICAR A PARTIR DAQUI. FAZER AS CONTAS DIRETAMENTE NESSE FOR.

    for(let i = 0; i < elements.length; i++){
        if (elements[i] == "+" || elements[i] == "-" || elements[i] == "x" || elements[i] == "÷"){
            indexElements.push(elements.indexOf(elements[i])); //armazena o index do operador na array
            operatorsElements.push(elements[i]); //armazena o operador na array
        } else {
            numberElements.push(elements[i]); //armazena o número 
        }
    }

    let concatElements = [elements[0]];

    // for(let i = 0; i < elements.length; i++){
    //     //check if there's multiplication to do
    //     if (elements[i] == "x"){ 
    //         for(let i2 = i + 1; i2 < elements.length; i2++){
    //             if (elements[i2] == "+" || elements[i2] == "-" || elements[i2] == "x" || elements[i2] == "÷"){
    //                 break;
    //             } else{
    //                 concatElements = concatElements + elements[i2];
    //             }
    //         }
    //     }
    // }

    for(let i = 0; i < elements.length; i++){
        if (elements[i] == "+" || elements[i] == "-" || elements[i] == "x" || elements[i] == "÷"){
            break;
        } else {
            concatElements[i] = elements[i-1] + elements[i]; 
        }
        concatElements.push(concatElements[i]);
    }    


    // console.log(numberElements);
    // console.log(operatorsElements);
    // console.log(indexElements);
    console.log(concatElements);
});










