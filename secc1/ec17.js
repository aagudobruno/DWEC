function valCorreu(){
    var input=document.getElementById("input1").value;
    var countArr=0;
    var ext=input[input.length-4]+input[input.length-3]+input[input.length-2]+input[input.length-1];
    var validArr=false;
    var validExt=false;
    for(i=0;i<input.length;i++){
        if(input[i]=="@"){
            countArr++;
        }
    }
    if (ext==".net"||ext==".com"||ext==".org"){
        validExt=true;
    }
    if (countArr==1){
        validArr=true;
    }
    if (validArr && validExt){
        document.getElementById("results").innerHTML="correu vàlid";
    }else if(validArr){
        document.getElementById("results").innerHTML="extensió malament";
    }else if(validExt){
        document.getElementById("results").innerHTML="arroba malament";
    }else if(!validExt && !validArr){
        document.getElementById("results").innerHTML="introduesqui correu";
    }    
}