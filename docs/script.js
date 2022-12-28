function encrypt(){

    var texto = document.getElementById("txtencrypt").value.toLowerCase();

    var textencryp = texto.replace(/e/igm, "enter");
    var textencryp = textencryp.replace(/i/igm, "imes");
    var textencryp = textencryp.replace(/a/igm, "ai");
    var textencryp = textencryp.replace(/o/igm, "ober");
    var textencryp = textencryp.replace(/u/igm, "ufat");
    
    document.getElementById("areaencrypt").innerHTML = textencryp;

    document.getElementById('divimg').style.display ="none";
    document.getElementById('seccion2').style.display ="block";
    document.getElementById('sec-btn2').style.display ="block";
   

    alert("encrypt");
    return texto;
}

function validarInput() {
    document.getElementById("toencrypt").disabled = !document.getElementById("txtencrypt").value.length;
  }

function uncrypt(){
    
    var texto = document.getElementById("txtencrypt").value.toLowerCase();

    var textencryp = texto.replace(/enter/igm, "e");
    var textencryp = textencryp.replace(/imes/igm, "i");
    var textencryp = textencryp.replace(/ai/igm, "a");
    var textencryp = textencryp.replace(/ober/igm, "o");
    var textencryp = textencryp.replace(/ufat/igm, "u");
    
    document.getElementById("areaencrypt").innerHTML = textencryp;
    
    alert("uncrypt");
    return texto;
}

function copied(){
    var contenido = document.querySelector("#areaencrypt");
    contenido.select();
    document.execCommand("copy");
    alert("copiado");
    return contenido;
}

function ocultar(){
    document.getElementById("gridecnrypt").style.display = "inherit";
}