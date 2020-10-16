function borrarLa(){
    var input=document.getElementById("input1").value;
    document.getElementById("results").innerHTML=input.replace(/la/g, "");
}