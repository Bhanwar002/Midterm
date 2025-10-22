function calculateFactorial() {
  const inputEl = document.getElementById("userInput");
  const outputEl = document.getElementById("output");
  const value = inputEl.value.trim();

  if (value === "" || isNaN(value) || value < 0) {
    outputEl.innerText = "Please enter a non-negative integer.";
    return;
  }

  const n = parseInt(value, 10);
  let factorial = BigInt(1); // using BigInt to allow larger values
  for (let i = 1; i <= n; i++) {
    factorial *= BigInt(i);
  }

  outputEl.innerText = `${n}! = ${factorial.toString()}`;
}

function setTheme(mode) {
  document.body.setAttribute("data-bs-theme", mode);
}
