function converteTextoParaValor(texto) {
    var textoLimpo = texto.replace("R$ ", "").replace(",", ".");
    return parseFloat(textoLimpo);
}

function converteValorParaTexto(valor) {
    let texto = (valor < 1 ? "0" : "") + Math.floor(valor * 100);
    texto = "R$ " + texto;
    return texto.substr(0, texto.length - 2) + "," + texto.substr(-2);
}

function atualizarCampoTotal(valor) {
    let total = document.getElementById("total");
    total.innerHTML = converteValorParaTexto(valor);
}

function calcularTotalProdutos() {
    let produtos = document.getElementsByClassName("produto");
    let total = 0;

    for (let i = 0; i < produtos.length; i++) {
        let elementoPreco = produtos[i].getElementsByClassName("preco");
        let textoPreco = elementoPreco[0].innerHTML;
        let preco = converteTextoParaValor(textoPreco);

        let elementoQuantidade = produtos[i].getElementsByClassName("quantidade");
        let textoQuantidade = elementoQuantidade[0].value;
        let quantidade = converteTextoParaValor(textoQuantidade);

        let subTotal = quantidade * preco;
        total += subTotal;
    }

    return total;
}

function aoMudarQuantidade() {
    atualizarCampoTotal(calcularTotalProdutos());
}

function aoCarregarDocumento() {
    let camposQuantidade = document.getElementsByClassName("quantidade");

    for (let i = 0; i < camposQuantidade.length; i++) {
        camposQuantidade[i].onchange = aoMudarQuantidade;
    }
}

window.onload = aoCarregarDocumento;
