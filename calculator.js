// Array to store valid results
let results = [];

while (true) {
    let x = prompt("Enter the first number:");
    if (x === null) break;
    let y = prompt("Enter the second number:");
    if (y === null) break;
    let operator = prompt("Enter an operator (+, -, *, /, %):");
    if (operator === null) break;

    // Convert inputs to numbers
    x = parseFloat(x);
    y = parseFloat(y);

    let result;

    if (isNaN(x) || isNaN(y)) {
        result = "Error: Invalid number(s)";
    } else {
        switch (operator) {
            case "+":
                result = x + y;
                break;
            case "-":
                result = x - y;
                break;
            case "*":
                result = x * y;
                break;
            case "/":
                result = y !== 0 ? x / y : "Error: Division by zero";
                break;
            case "%":
                result = x % y;
                break;
            default:
                result = "Error: Invalid operator";
        }
    }

    document.write("<table>");
    document.write("<tr><th>Number 1</th><th>Operator</th><th>Number 2</th><th>Result</th></tr>");
    document.write(`<tr><td>${x}</td><td>${operator}</td><td>${y}</td><td>${result}</td></tr>`);
    document.write("</table><br>");

    if (typeof result === "number") {
        results.push(result);
    }

    if (!confirm("Do you want to perform another calculation?")) break;
}

// Calculate min, max, average, and total for valid results
if (results.length > 0) {
    let min = Math.min(...results);
    let max = Math.max(...results);
    let total = results.reduce((sum, value) => sum + value, 0);
    let avg = total / results.length;

    document.write("<h2>Summary Table</h2>");
    document.write("<table>");
    document.write("<tr><th>Minimum</th><th>Maximum</th><th>Average</th><th>Total</th></tr>");
    document.write(`<tr><td>${min}</td><td>${max}</td><td>${avg.toFixed(2)}</td><td>${total}</td></tr>`);
    document.write("</table>");
}
