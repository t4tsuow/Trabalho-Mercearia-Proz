// Array
const produtosArray = ["Arroz 5kg", 25.90, "Mercearia"]

// Objeto ou Lista para quem veio do pyton
// chave / index : valor / resultado

const produto = {
    nome: "Arroz 5kg",
    preco: 25.90,
    categoria: "Mercearia"
}

console.log(produto.nome)
console.log(produto.preco)
console.log(produto.categoria)

// array de objeto

const produtos = [
    {
        nome: "Arroz 5kg",
        preco: 25.90,
        categoria: "Mercearia"
    },
    { 
        nome: "Nuget",
        preco: 24,
        categoria: "Frios"
    },
    { 
        nome: "Leite 1L",
        preco: 8,
        categoria: "Laticinio"
    }
]

console.log("==============")

// Lista todos os produtos
console.log(produtos)
// Lista o produto 1 (o segundo da lista)
console.log(produtos[1])
// Pega o nome do terceiro produto
console.log(produtos[2].nome)

// Lista todos os nomes
const nomes = produtos.map(produto => produto.nome)
console.log(nomes)

produtos.push({
    nome: "Miojo Turma da monica de tomate",
    preco: 2.99,
    categoria: "Mercearia"
})

console.log(produtos)

// SetItem serve para Adicionar itens no localStorage
const nome = "MErcearia Proz"
localStorage.setItem("Minha Loja", nome)

// getItem serve para pegar um item do localStorage
const minhaLoja = localStorage.getItem("Minha Loja")
console.log("Minha Loja é " + minhaLoja)

const produtosString = JSON.stringify(produtos)
localStorage.setItem("Produtos", produtosString)

produtos.push(
{
    nome: "Condicionador Skala",
    preco: 10.50,
    categoria: "Higiene"
},
{
    nome: "Gift card",
    preco: 67.50,
    categoria: "Eletronica"
}
)

// 3 - Usar o .find() para achar algum produto pelo nome

const valoresProduto = produtos.map((produto) => produto.preco)
const menorValor = Math.min(...valoresProduto)
const produtoMenorValor = produtos.filter((produto) => produto.preco == menorValor)
console.log(...produtoMenorValor)
console.log(...valoresProduto)

const ValoresSomados = ...valoresProduto ((acumulador,produtos) => {
    return acumulador + produtos
},);

// 4 - Usar o .reduce() para fazer a soma dos preços

const questao5 = "Brenin Guloviskys"
localStorage.setItem('Brenin Guloviskys',67)
