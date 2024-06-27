let value1 = '';
let value2 = '';
let operation = null;

function agregarNumero(value) {
    if (operation === null) {
        value1 += value;
        document.getElementById('result').textContent = value1;
    } else {
        value2 += value;
        document.getElementById('result').textContent = value2;
    }
}

function setOperation(op) {
    operation = op;
    document.getElementById('selectedOperation').textContent =
        (operation === 'sum') ? '+' :
        (operation === 'mul') ? '*' :
        (operation === 'div') ? '/' :
        (operation === 'subtract') ? '-' :
        'Operación desconocida';
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
    operation = 'calculate';
}

function limpiarNumeros() {
    value1 = '';
    value2 = ''; 
    document.getElementById('selectedValue1').textContent = '';
    document.getElementById('selectedValue2').textContent = ''; 
}
