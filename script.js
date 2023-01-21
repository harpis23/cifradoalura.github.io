function encriptar(){
    var frase = document.getElementById("tex-area").value.toLowerCase();

    //igualar la frase al texto encriptador, replace convierte la e en enter
    //i toma letras mayuscu y minusculas, m toma en cuenta varias lineas ,g toma toda la linea
    var textoEncriptado = frase.replace(/e/img,"enter");
    var textoEncriptado = textoEncriptado.replace(/i/img,"imes");
    var textoEncriptado = textoEncriptado.replace(/a/img,"ai");
    var textoEncriptado = textoEncriptado.replace(/o/img,"ober");
    var textoEncriptado = textoEncriptado.replace(/u/img,"ufat");

    //donde se va a mostar 
    document.getElementById("textodesencriptado").innerHTML =  textoEncriptado;
    //boton copiar se muestra hasta que le dan en encriptar
    document.getElementById("btncopiar").style.display = "inherit";
}    

function desencriptar(){
    var frase = document.getElementById("tex-area").value.toLowerCase();

    //igualar la frase al texto encriptador, replace convierte la e en enter
    //i toma letras mayuscu y minusculas, m toma en cuenta varias lineas ,g toma toda la linea
    var textoEncriptado = frase.replace(/enter/img,"e");
    var textoEncriptado = textoEncriptado.replace(/imes/img,"i");
    var textoEncriptado = textoEncriptado.replace(/ai/img,"a");
    var textoEncriptado = textoEncriptado.replace(/ober/img,"o");
    var textoEncriptado = textoEncriptado.replace(/ufat/img,"u");

    //donde se va a mostar 
    document.getElementById("textodesencriptado").innerHTML =  textoEncriptado;
}  

function copiar (){
    var contenido = document.querySelector("#textodesencriptado");
    contenido.select();
    document.execCommand("copy");
}
 