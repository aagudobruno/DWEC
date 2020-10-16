function quantesA(){
    var input=document.getElementById("input1").value;
    var contA=0;
    for (i=0;i<input.length;i++){
        if(input[i]=="a"){
            contA++;
        }
    }
    document.getElementById("results").innerHTML=contA;
}