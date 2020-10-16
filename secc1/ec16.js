function acronims(){
    var input=document.getElementById("input1").value;
    var strFin=input[0].toUpperCase();
    for(i=0;i<input.length;i++){
        if(input[i]==" "){
            strFin=strFin+input[i+1].toUpperCase();
        }
    }
    document.getElementById("results").innerHTML=strFin;
}