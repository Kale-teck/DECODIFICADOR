const cripto = document.querySelector("#cripto");
const descripto = document.querySelector("#descripto");
const copiar = document.querySelector("#copiar");
const texto = document.querySelector("#texto");

texto.addEventListener("keypress", function(e) {
    if(!checkChar(e)) {
      e.preventDefault();
  }
});

function checkChar(e) {
    var char = String.fromCharCode(e.keyCode);
  
  console.log(char);
    var pattern = '[a-z ]';
    if (char.match(pattern)) {
      return true;
  }
}

cripto.addEventListener("click", function(e) {
    e.preventDefault();

    const texto = document.querySelector("#texto");
    const codigo = document.querySelector("#codigo");

    var value = texto.value;

    var e = value.replace(/e/g, "enter");
    var i = e.replace(/i/g, "imes");
    var a = i.replace(/a/g, "ai");
    var o = a.replace(/o/g, "ober");
    var u = o.replace(/u/g, "ufat");

    codigo.innerHTML = u;
})

descripto.addEventListener("click", function(e) {
    e.preventDefault();

    const texto = document.querySelector("#texto");
    const codigo = document.querySelector("#codigo");

    const value = texto.value;

    var e = value.replace(/enter/g, "e");
    var i = e.replace(/imes/g, "i");
    var a = i.replace(/ai/g, "a");
    var o = a.replace(/ober/g, "o");
    var u = o.replace(/ufat/g, "u");

    if (value != u) {

    codigo.innerHTML = u;
    } else {
        alert('Descriptografia só funciona para textos criptografados ! ')
    }
})

function copia(evento) {
    codigo.select();
    codigo.setSelectionRange(0, 99999);
    document.execCommand("copy");
}

copiar.onclick = copia;