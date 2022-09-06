function Addition() {
    let a = parseInt(document.getElementById("num1").value);
    let b = parseInt(document.getElementById("num2").value);
    document.getElementById("result").innerHTML = 'Result Addition: ' + (a + b)
}

function Subtract() {
    let a = parseInt(document.getElementById("num1").value);
    let b = parseInt(document.getElementById("num2").value);
    document.getElementById("result").innerHTML = 'Result Subtraction: ' + (a - b)
}

function Multi() {
    let a = parseInt(document.getElementById("num1").value);
    let b = parseInt(document.getElementById("num2").value);
    document.getElementById("result").innerHTML = 'Result Multiplication: ' + (a * b)
}

function Divis() {
    let a = parseInt(document.getElementById("num1").value);
    let b = parseInt(document.getElementById("num2").value);
    document.getElementById("result").innerHTML = 'Result Division: ' + (a / b)
}

