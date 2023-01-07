const cripto = document.querySelector("#cripto");
const descripto = document.querySelector("#descripto");
const copiar = document.querySelector("#copiar");

cripto.addEventListener("click", function(e) {
    e.preventDefault();

    const texto = document.querySelector("#texto");
    const codigo = document.querySelector("#codigo")

    var value = texto.value.toLowerCase();

    codigo.innerHTML = value;
})

descripto.addEventListener("click", function(e) {
    e.preventDefault();

    const texto = document.querySelector("#texto");
    const codigo = document.querySelector("#codigo");

    const value = texto.value;

    codigo.innerHTML = value;  
})

function copia(evento) {
    codigo.select();
    codigo.setSelectionRange(0, 99999)
    document.execCommand("copy");
}

copiar.onclick = copia;