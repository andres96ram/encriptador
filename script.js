const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

function btnEncriptar(){
    const textoEncriptado=encriptar(textArea.value)
    mensaje.value=textoEncriptado
    textArea.value= "";
    mensaje.style.backgroundImage = "none"
}

function encriptar(stringEncriptado) {
  let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
  stringEncriptado = stringEncriptado.toLowerCase();

  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringEncriptado.includes(matrizCodigo[i][0])){
      stringEncriptado = stringEncriptado.replaceAll(
        matrizCodigo[i][0],
        matrizCodigo[i][1]
      );
    }
  }
  return stringEncriptado;
}

function btndesencriptar(){
    const textoEncriptado=desencriptar(textArea.value)
    mensaje.value=textoEncriptado
    textArea.value= "";
    mensaje.style.backgroundImage = "none"
}


function desencriptar(stringdesencriptado) {
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringdesencriptado = stringdesencriptado.toLowerCase();
  
    for (let i = 0; i < matrizCodigo.length; i++) {
      if (stringdesencriptado.includes(matrizCodigo[i][1])){
        stringdesencriptado = stringdesencriptado.replaceAll(
          matrizCodigo[i][1],
          matrizCodigo[i][0]
        );
      }
    }
    return stringdesencriptado;
  }

  function btncopiar(){
    var copyText = document.getElementById("salida"); // se obtiene el texto del campo de salida (text-area)
    copyText.select(); // selecciona el texto del campo 
    navigator.clipboard.writeText(copyText.value); // se guarda el texto en el portapapeles
    alert("Texto copiado :" + copyText.value); // Aviso de que el texto se copio 

 }