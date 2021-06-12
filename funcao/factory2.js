function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('Geladeira', 2000))
console.log(criarProduto('iPad', 4000))