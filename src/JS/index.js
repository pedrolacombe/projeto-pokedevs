const listaSelecaoPokedevs = document.querySelectorAll(".pokedev");


listaSelecaoPokedevs.forEach(pokedev => {
    pokedev.addEventListener("click", () => {

        escondeCartaoPokedev();

        const idPokedevSelecionado = mostrarCartaoPokedev(pokedev);

        esconderPokedevNaListagem();

        mostrarPokedevNaListagem(idPokedevSelecionado);
    })
})


function mostrarPokedevNaListagem(idPokedevSelecionado) {
    const pokedevSelecionadoNaListagem = document.getElementById(idPokedevSelecionado);
    pokedevSelecionadoNaListagem.classList.add("ativo");
}

function esconderPokedevNaListagem() {
    const pokedevAtivoNaListagem = document.querySelector(".ativo");
    pokedevAtivoNaListagem.classList.remove("ativo");
}

function mostrarCartaoPokedev(pokedev) {
    const idPokedevSelecionado = pokedev.attributes.id.value;
    const idDoCartaoPokedevParaAbrir = "cartao-" + idPokedevSelecionado;
    const cartaoPokedevParaAbrir = document.getElementById(idDoCartaoPokedevParaAbrir);
    cartaoPokedevParaAbrir.classList.add("aberto");
    return idPokedevSelecionado;
}

function escondeCartaoPokedev() {
    const cartaoPokedevAberto = document.querySelector(".aberto");
    cartaoPokedevAberto.classList.remove("aberto");
}
