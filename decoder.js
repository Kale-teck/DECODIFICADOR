const botao = document.querySelector("#cripto");
const outrobotao = document.querySelector("#descripto");

botao.addEventListener("click", function(e) {
    e.preventDefault();

    const texto = document.querySelector("#texto-1");

    const value = texto.value;

    var element = document.getElementById('caixa-2');
    element.innerHTML = value + '<input type="submit" value="Copiar" class="botao-copiar">';
})

outrobotao.addEventListener("click", function(e) {
    e.preventDefault();

    const name = document.querySelector("#texto-1");

    const value = name.value;

    var element = document.getElementById('caixa-2');
    element.innerHTML = value + '<input type="submit" value="Copiar" class="botao-copiar">';
})

