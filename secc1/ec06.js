function strBuit() {
    var input = document.getElementById("input1").value;
    input = input.toString();
    if (input===""){
        document.getElementById("results").innerHTML = "string buit";
    } else {
        document.getElementById("results").innerHTML = "string no buit";
    }
}