function appendValue(value) {
    const result = document.getElementById("result");
    result.value += value;
}

// Function to clear the display
function clearDisplay() {
    document.getElementById("result").value = "";
}

// Function to delete the last character
function deleteLast() {
    const result = document.getElementById("result");
    result.value = result.value.slice(0, -1);
}

// Function to evaluate the expression
function calculate() {
    const result = document.getElementById("result");
    try {
        result.value = eval(result.value);
    } catch {
        result.value = "Error";
    }
}