// Variable to store calculation history
let history = [];

document.getElementById("calculate-btn").addEventListener("click", () => {
  // Input values and selected operation
  const num1 = Number(document.getElementById("num1").value);
  const num2 = Number(document.getElementById("num2").value);
  const operation = document.getElementById("operation").value;

  // Variable to store the result
  let result;

  // Conditional statements for MDAS operations
  if (operation === "+") {
    result = num1 + num2;
  } else if (operation === "-") {
    result = num1 - num2;
  } else if (operation === "*") {
    result = num1 * num2;
  } else if (operation === "/") {
    if (num2 === 0) {
      result = "Error: Division by zero";
    } else {
      result = num1 / num2;
    }
  }

  // To display results
  const resultElement = document.getElementById("result");
  if (typeof result === "string") {
    resultElement.textContent = result;
  } else {
    resultElement.textContent = `Result: ${result}`;

    // To save in History
    const calculation = `${num1} ${operation} ${num2} = ${result}`;
    history.push(calculation);

    // Update history list using a loop
    const historyList = document.getElementById("history");
    historyList.innerHTML = "";
    for (const entry of history) {
      const listItem = document.createElement("li");
      listItem.textContent = entry;
      historyList.appendChild(listItem);
    }
  }
});
