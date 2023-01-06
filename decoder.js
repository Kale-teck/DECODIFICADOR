const botao = document.querySelector("#send");
const desenviar = document.querySelector("#nosend");
const copiar = document.querySelector("#copiar");

botao.addEventListener("click", function(e) {
    e.preventDefault();

    const name = document.querySelector("#name");
    const codigo = document.querySelector("#codigo")

    const value = name.value;

    codigo.innerHTML = value;
})

desenviar.addEventListener("click", function(e) {
    e.preventDefault();

    const name = document.querySelector("#name");
    const codigo = document.querySelector("#codigo");

    const value = name.value;

    codigo.innerHTML = value;  
})

function copia(evento) {
    codigo.select();
    codigo.setSelectionRange(0, 99999)
    document.execCommand("copy");
}

copiar.onclick = copia;