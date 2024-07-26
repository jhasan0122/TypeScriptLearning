
const subscribe = document.getElementById('subscribe')
const done = document.getElementById('done')
const visa = document.getElementById('visa');
const paypal = document.getElementById('paypal');
const master = document.getElementById('master');
const submit = document.getElementById('submit');
const subscribed = document.getElementById('subscribed');
const paymentResult = document.getElementById('paymentResult');

submit.onclick = ()=>{
    if((subscribe as HTMLInputElement).checked && (done as HTMLInputElement).checked){
        subscribed.textContent = "Subscribed Success";
    }
    else{
        subscribed.textContent = "Unsub";
    }

    if((visa as HTMLInputElement).checked){
        paymentResult.textContent = "Visa is selected";
    }
    else if((paypal as HTMLInputElement).checked){
        paymentResult.textContent = "Paypal is selected";
    }
    else if((master as HTMLInputElement).checked){
        paymentResult.textContent = "Master is selected";
    }
    else{
        paymentResult.textContent = "please select any thing";
    }
}