//factorial
let  variable = document.getElementById("test").value;
let  res = document.getElementById("res");
let buttonFactorial = document.getElementById("buttonFactorial");
//factorialENd
//sort
let arrses = document.getElementById("arrs");
let answer = document.getElementById("answer");
let buttonSort = document.getElementById("buttonSort");
//sortEnd
//fibonacci
let fibNum = document.getElementById("fibNum").value;
let fibAnswer = document.getElementById("fibAnswer");
let fibonacci = document.getElementById("fibonacci");
//fibonacciEnd
//Переменные
fibonacci.addEventListener("click",() =>{getData(("fib"))});
buttonSort.addEventListener("click", () =>{getData("sort")});
buttonFactorial.addEventListener('click',() =>{getData("factorial")});



function factorials(variable){
    let result = 0;
    for (let i = 0; i <= variable; i++) {
        result += i;
    }
    return result;
}


function getData(type) {
    if(type == "factorial"){
        if (isNaN(variable)){
            res.innerHTML = "it isn`t text";
        }
        else{
            res.innerHTML = factorials(variable);
        }
    }
    else if(type == "sort"){
        answer.innerHTML = bubbleSort(arrses.value.split(" "));
        console.log(arrses.value.split(" "));
        console.log( bubbleSort(arrses.value.split(" ")));
    }
    else if(type == "fib"){
        fibAnswer.innerHTML = fibonacci(fibNum);
    }
}
function bubbleSort(arrays){
    let length = arrays.length;
    for(let i = 0; i < length-1; i++){
        for(let j = 0; j<length-1-i; j++){
            if(arrays[j+1]<arrays[j]){
                let temp = arrays[j+1];
                arrays[j+1] = arrays[j];
                arrays[j] = temp;
            }
        }
    }
    return arrays;
}
function fibonacciFunction(fibNum){
    let result = 0;
    let fibArray = [];
    let b = 1;
    while (result<fibNum){
        fibArray += result;
        let temp = result;
        result = b;
        b = temp + b;
    }
    return fibArray;
}

