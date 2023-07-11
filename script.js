function addition(){
    var a = parseInt(document.getElementById("n1").value);
    var b = parseInt(document.getElementById("n2").value);
    var c = a+b;
    console.log(c);
    document.getElementById("add").innerHTML=c;
}
function subtraction(){
    var a = parseInt(document.getElementById("n1").value);
    var b = parseInt(document.getElementById("n2").value);
    var c = a-b;
    console.log(c);
    document.getElementById("sub").innerHTML=c;
}
function multiplication(){
    var a = parseInt(document.getElementById("n1").value);
    var b = parseInt(document.getElementById("n2").value);
    var c = a*b;
    console.log(c)
    document.getElementById("mul").innerHTML=c;
}
function division(){
    var a = parseInt(document.getElementById("n1").value);
    var b = parseInt(document.getElementById("n2").value);
    var c = b/a;
    console.log(c)
    document.getElementById("div").innerHTML=c;
}