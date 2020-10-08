function es_numero() {
    input = document.getElementById("input1").value;
    if (input * 1 == input){
        document.getElementById("results").innerHTML = "és número";
    } else {
        document.getElementById("results").innerHTML = "no és número";
    }
}