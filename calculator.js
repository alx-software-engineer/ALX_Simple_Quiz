// Addition 
function add(number1, number2) {
    return number1 + number2;
}

// subtraction
function subtraction(number1, number2) {
    return number1 - number2;
}
// multiplication
function multiplication(number1, number2) {
    return number1 * number2;
}

// division
function division(number1, number2) {
    return number1 / number2;
}

 // Event listeners on arithmetic functions. 
document.getElementById('add').addEventListener('click', function() {
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    const result = add(number1, number2);
    document.getElementById('calculation-result').textContent = result;
});

document.getElementById('subtract').addEventListener('click', function() {
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    const result = subtraction(number1, number2);
    document.getElementById('calculation-result').textContent = result;
});


document.getElementById('multiply').addEventListener('click', function() {
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    const result = multiplication(number1, number2);
    document.getElementById('calculation-result').textContent = result;
});


document.getElementById('divide').addEventListener('click', function() {
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    const result = division(number1, number2);
    document.getElementById('calculation-result').textContent = result;
});