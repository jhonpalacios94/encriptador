
function obtenerPalabras() {
  let frase = [];
  let texto = document.getElementById("texto").value;
  for (let i = 0; i < texto.length; i++) frase.push(texto[i]);
  console.log(frase);
  for (let i = 0; i < frase.length; i++)
    if (frase[i] === "a") {
      frase.splice(i, 1, "ai");
    } else if (frase[i] === "e") {
      frase.splice(i, 1, "enter");
    } else if (frase[i] === "i") {
      frase.splice(i, 1, "imes");
    } else if (frase[i] === "o") {
      frase.splice(i, 1, "ober");
    } else if (frase[i] === "u") {
      frase.splice(i, 1, "ufat");
    }
  document.getElementById("respuesta").removeAttribute("hidden");  
  document.getElementById("imgRespuesta").style.display="none";
  document.getElementById("infoR").style.display="none";
  let textor = frase.join("");
  document.getElementById("respuesta").innerHTML = textor;
  document.getElementById("btn3").removeAttribute("hidden");
  

}
function Desencriptado() {
  let texto = document.getElementById("texto").value;
  texto = texto.replace(/ai/g, "a");
  texto = texto.replace(/enter/g, "e");
  texto = texto.replace(/imes/g, "i");
  texto = texto.replace(/ober/g, "o");
  texto = texto.replace(/ufat/g, "u");
  document.getElementById("respuesta").removeAttribute("hidden");  
  document.getElementById("imgRespuesta").style.display="none";
  document.getElementById("infoR").style.display="none";
  document.getElementById("respuesta").innerHTML = texto;
  document.getElementById("btn3").removeAttribute("hidden");
}
function copiarTexto() {
  let texto = document.getElementById("respuesta").textContent;
  navigator.clipboard.writeText(texto);
  alert("¡Texto copiado!");
  limpiar();
}
function limpiar(){
  document.getElementById("texto").value = "";
  document.getElementById("respuesta").innerHTML = "";
}