function guions(){
    var input=document.getElementById("input1").value;
    var strFin="";
    for(i=0;i<input.length;i++){
        if(input[i]!=" " ){
            strFin=strFin+input[i];
        }else{
            if(input[i+1]!=" "){
                strFin=strFin+input[i];
            }
        }
    }
    document.getElementById("results").innerHTML=strFin.replace(/ /g, "-");
}