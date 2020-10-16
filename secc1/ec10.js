function primIdarr(){
    input=document.getElementById("input1").value;
    var posPrimA;
    var posUltA=0;
    for(i=0;i<input.length;i++){
        if(input[i]=="a"){
            if(posPrimA===undefined){
                posPrimA=i;
            }else if(posUltA<i){
                posUltA=i;
            }
        }
    }
    document.getElementById("results").innerHTML="La primera posició on trobam una a és: "+posPrimA+" i la darrera és: "+posUltA;
}