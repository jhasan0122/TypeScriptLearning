

let timeOutId;

function startTimer() {
    timeOutId = setTimeout(()=> {
        window.alert("Hello")
    },3000);
    console.log(timeOutId)
    console.log("Started");
}

function clearTimer() {
    clearTimeout(timeOutId);
    console.log("Cleared");
}