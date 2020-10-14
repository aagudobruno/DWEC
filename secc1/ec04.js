function decimals() {
    var input = parseFloat(document.getElementById("input1").value);
    var pEntera = Math.floor(Math.abs(input));
    input = input - pEntera;
    inS=input.toString();
    input=input*10**(ins.length-1);
    document.getElementById("results").innerHTML = input;
}