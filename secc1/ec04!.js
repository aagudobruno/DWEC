function decimals() {
    pEntera = 0;
    input = document.getElementById("input1").value;
    pEntera = Math.trunc(input);
    input = input - pEntera;
    while (!Number.isInteger(input)){
        input=input*10;
    }
    document.getElementById("results").innerHTML = input;
}