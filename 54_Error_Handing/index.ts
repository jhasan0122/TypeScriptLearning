
try{
    const dividend:number = Number(window.prompt("Enter a dividend"));
    const divisor:number = Number(window.prompt("Enter a divisor"));

    if(divisor == 0){
        throw new Error("Divided by zero");
    }
    if(isNaN(divisor) || isNaN(dividend)){
        throw new Error("Must be number");
    }

    const result = dividend /divisor;
    console.log(result);
}
catch (error){
    console.log(error)
}
finally {
    console.log("This will exe")
}