let value1 = '';
let value2 = '';
let operation = 'sum'; // Por defecto, la operación es suma

function agregarNumero(variable, value) {
    if (variable === 1) {
        value1 += value;
        document.getElementById('selectedValue1').textContent = value1;
    } else if (variable === 2) {
        value2 += value;
        document.getElementById('selectedValue2').textContent = value2;
    }
}

function setOperation(op) {
    operation = op;
    document.getElementById('selectedOperation').textContent =
        (operation === 'sum') ? 'Suma' : 
        (operation === 'mul') ? 'Multiplicacion' : 
        (operation === 'div') ? 'Division' : 
        (operation === 'subtract') ? 'Resta' : 
        'Operacion desconocida';
}

function calculateResult() {
    let num1 = parseFloat(value1);
    let num2 = parseFloat(value2);
    let result;
    if (operation === 'sum') {
        result = num1 + num2;
    } else if (operation === 'subtract') {
        result = num1 - num2;
    } else if (operation == 'div'){
        result = num1 / num2;
    } else if (operation == 'mul'){
        result = num1 * num2;
    }
    document.getElementById('result').textContent = result;
}
function limpiarNumeros() {
    value1 = '';
    value2 = ''; 
    document.getElementById('selectedValue1').textContent = '';
    document.getElementById('selectedValue2').textContent = ''; 
}
