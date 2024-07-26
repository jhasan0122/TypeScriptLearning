var subscribe = document.getElementById('subscribe');
var done = document.getElementById('done');
var visa = document.getElementById('visa');
var paypal = document.getElementById('paypal');
var master = document.getElementById('master');
var submit = document.getElementById('submit');
var subscribed = document.getElementById('subscribed');
var paymentResult = document.getElementById('paymentResult');
submit.onclick = function () {
    if (subscribe.checked && done.checked) {
        subscribed.textContent = "Subscribed Success";
    }
    else {
        subscribed.textContent = "Unsub";
    }
    if (visa.checked) {
        paymentResult.textContent = "Visa is selected";
    }
    else if (paypal.checked) {
        paymentResult.textContent = "Paypal is selected";
    }
    else if (master.checked) {
        paymentResult.textContent = "Master is selected";
    }
    else {
        paymentResult.textContent = "please select any thing";
    }
};
