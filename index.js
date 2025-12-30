let exibir = document.getElementById('result')
let inputNumber = ''
let inputOperator = ''

function appendNumber(value){
    inputNumber += value
    exibir.textContent = inputNumber
}

function appendOperator(operator){
    if(inputNumber === "" && operator !== ".") return
    inputNumber += operator;
    exibir.textContent = inputNumber;
}

function calcular(){
    try {
        let resultado = eval(inputNumber)
        if(!Number.isInteger(resultado)){
            resultado = resultado.toFixed(2)
        }
        inputNumber = resultado;
        exibir.textContent = inputNumber;
    } catch(error){
        exibir.textContent = 'ERROR';
        inputNumber = '';
    }
}

function limparCalculo(){
    inputNumber = ""
    exibir.textContent = inputNumber
}