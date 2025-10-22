// =========================
//  Factorial Calculation
// =========================
function calculateFactorial() {
  const inputField = document.getElementById("userInput");
  const outputDiv = document.getElementById("output");
  const inputValue = inputField.value.trim();

  if (inputValue === "" || isNaN(inputValue) || inputValue < 0) {
    outputDiv.innerText = "Please enter a non-negative number.";
    return;
  }

  const n = parseInt(inputValue, 10);
  let factorial = 1;

  for (let i = 1; i <= n; i++) {
    factorial *= i;
  }

  outputDiv.innerText = `${n}! = ${factorial}`;
}

// =========================
//  Theme Switch
// =========================
function setTheme(mode) {
  document.body.setAttribute("data-bs-theme", mode);
}
