function girarStr() {
    var input = document.getElementById("input1").value;
    var strGirat = [];
    var strFin="";
    strGirat.length= input.length;
    for (i=input.length-1;i>-1;i--){
        strFin=strFin+input[i];
    }
    document.getElementById("results").innerHTML= strFin;
}