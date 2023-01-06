const botao = document.querySelector("#send");

botao.addEventListener("click", function(e) {
    e.preventDefault();

    const name = document.querySelector("#name");

    const value = name.value;

    document.write(value);
})