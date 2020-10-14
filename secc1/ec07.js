function girarStr() {
    var input = document.getElementById("input1").value;
    var strGirat = [];
    strGirat.length= input.length;
    var j=0;
    for (i=input.length;i>-1;i--){
        strGirat[j]=input[i];
        j++
    }
    var strFin=strGirat.toStrings;
    document.getElementById("results").innerHTML= strGirat;
}