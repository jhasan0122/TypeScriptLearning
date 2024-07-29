
const result = document.getElementById('result') as HTMLInputElement | null;

function appendDisplay(input:string):void {
        result.value += input;
}

function calculate() {
    try{
        result.value = eval(result.value);
    }
    catch (error){
        result.value = "Error";
    }

}

function clearDisplay() {
    result.value = "";
}