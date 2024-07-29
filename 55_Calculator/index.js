var result = document.getElementById('result');
function appendDisplay(input) {
    result.value += input;
}
function calculate() {
    try {
        result.value = eval(result.value);
    }
    catch (error) {
        result.value = "Error";
    }
}
function clearDisplay() {
    result.value = "";
}
