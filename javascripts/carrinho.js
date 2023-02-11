function converteTextoParaValor(texto) {
    let textoLimpo = texto.replace("R$ ", "").replace(",", ".");
    return parseFloat(textoLimpo);
}

function converteValorParaTexto(valor) {
    let texto = (valor < 1 ? "0" : "") + Math.floor(valor * 100);
    texto = "R$ " + texto;
    return texto.substr(0, texto.length - 2) + "," + texto.substr(-2);
}

function atualizarCampoTotal(valor) {
    let texto = converteValorParaTexto(valor);
    $("#total").text(texto);
}

function calcularTotalProdutos() {
    let produtos = $(".produto");
    let total = 0;

    $(produtos).each(function (i, produto) {
        let $produto = $(produtos[i]);
        let quantidade = converteTextoParaValor($produto.find(".quantidade").val());
        let preco = converteTextoParaValor($produto.find(".preco").text());
        total += quantidade * preco;
    });

    return total;
}

$(function () {
    $(".quantidade").change(function () {
        atualizarCampoTotal(calcularTotalProdutos());
    });
});
