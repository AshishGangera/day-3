function CalculateOperation() {
    const num1 = document.getElementById("num1").value;
    const num2 = document.getElementById("num2").value;
    const OperationForCalculato = document.getElementById("OperationForCalculato").value;

    
    let result;
    switch (OperationForCalculato) {
        case "add":
            result = parseInt(num1) + parseInt(num2);
            break;
        case "sub":
            result = num1 - num2;
            break;
        case "mul":
            result = num1 * num2;
            break;
        case "div":
            result = num1 / num2;
            break;
        

    }
    document.getElementById("result").innerHTML = result;
}