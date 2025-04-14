function calculate(operator) {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const resultElement = document.getElementById('result');
    
    if (isNaN(num1) || isNaN(num2)) {
        resultElement.textContent = "Por favor ingresa números válidos";
        resultElement.style.color = "red";
        return;
    }

    let result;
    switch(operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                resultElement.textContent = "Error: División por cero";
                resultElement.style.color = "red";
                return;
            }
            result = num1 / num2;
            break;
    }

    resultElement.textContent = `Resultado: ${result}`;
    resultElement.style.color = "green";
}