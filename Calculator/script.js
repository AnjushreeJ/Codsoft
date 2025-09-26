let display = document.getElementById("display");

// Append number
function appendNumber(num) {
  display.value += num;
}

// Append operator
function appendOperator(op) {
  if (display.value === "") return;
  let lastChar = display.value.slice(-1);
  if ("+-*/".includes(lastChar)) {
    display.value = display.value.slice(0, -1);
  }
  display.value += op;
}

// Clear display
function clearDisplay() {
  display.value = "";
}

// Delete last character
function deleteChar() {
  display.value = display.value.slice(0, -1);
}

// Calculate result
function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}