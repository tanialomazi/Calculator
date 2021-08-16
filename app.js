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

    //getting only numbers
    const numberElements = [];
    const operatorsElements = [];
    const indexElements = [];
    let numberUniqueElement = "";

    //inserting numbers on array
    for(let i = 0; i < actualNumber.length; i++){
        if (actualNumber[i] === "+" || actualNumber[i] === "-" || actualNumber[i] === "x" || actualNumber[i] === "÷"){
            // operatorsElements.push(actualNumber[i]); //insert operator on array
            // indexElements.push(actualNumber.indexOf(actualNumber[i])); //insert index of operator on array
            numberElements.push(actualNumber[i]);
            numberUniqueElement = "";
        }else if(actualNumber[i+1] === "+" || actualNumber[i+1] === "-" || actualNumber[i+1] === "x" || actualNumber[i+1] === "÷"){
                numberUniqueElement = numberUniqueElement + actualNumber[i];    
                numberElements.push(numberUniqueElement);  
            } else {
                numberUniqueElement = numberUniqueElement + actualNumber[i];          
            }
    }

    numberElements.push(numberUniqueElement);

    //check division
    for(let i = 0; i < numberElements.length; i++){
        if(numberElements[i] == "÷"){
            let newUniqueNumber = numberElements[i-1] / numberElements[i+1];
            numberElements[i-1] = newUniqueNumber;
            numberElements.splice(numberElements.indexOf(numberElements[i]), 2);
            i = 0; //restart for
        }
        console.log(numberElements);
    }

    //check multiplication
    for(let i = 0; i < numberElements.length; i++){
        if(numberElements[i] == "x"){
            let newUniqueNumber = numberElements[i-1] * numberElements[i+1];
            numberElements[i-1] = newUniqueNumber;
            numberElements.splice(numberElements.indexOf(numberElements[i]), 2);
            i = 0; //restart for
        }
        console.log(numberElements);
    }

    //check sum
    for(let i = 0; i < numberElements.length; i++){

        if(numberElements[i] == "+"){
            let newUniqueNumber = parseFloat(numberElements[i-1]) + parseFloat(numberElements[i+1]);
            numberElements[i-1] = newUniqueNumber;
            numberElements.splice(numberElements.indexOf(numberElements[i]), 2);
            i = 0; //restart for
        }
        console.log(numberElements);
    }

    //check sub
    for(let i = 0; i < numberElements.length; i++){
        if(numberElements[i] == "-"){
            let newUniqueNumber = numberElements[i-1] - numberElements[i+1];
            numberElements[i-1] = newUniqueNumber;
            numberElements.splice(numberElements.indexOf(numberElements[i]), 2);
            i = 0; //restart for
        }
        console.log(numberElements);
    }

    //showing result
    screen.innerHTML = numberElements;
});