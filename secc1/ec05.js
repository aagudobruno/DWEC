function decimalsTres() {
    var input = document.getElementById("input1").value;
    input = input / 19;
    document.getElementById("results").innerHTML = input.toFixed(3);
}