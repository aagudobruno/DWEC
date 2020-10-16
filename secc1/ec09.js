function abansA(){
    var input=document.getElementById("input1").value;
    var posPrimA=0;
    var boolA=false;
    var i=-1;
    while(!boolA && i<input.length){
        i++;
        if(input[i]=="a"){
            posPrimA=i;
            boolA=true;
        }
    }
    if(!boolA){
        document.getElementById("results").innerHTML="no hi ha cap A al text";
    }else{
        document.getElementById("results").innerHTML=input.slice(0,i);
    }
}