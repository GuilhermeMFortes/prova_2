let scanf = require('scanf');

const produtos = [
    {
        nome: "Notebook",
        categoria: "Eletrônico",
        valor: 1999.99
    },
    {
        nome: "Impressora",
        categoria: "Eletrônico",
        valor: 999.99
    },
    {
        nome: "Caneta BIC",
        categoria: "Escolar",
        valor: 0.50
    },
    {
        nome: "Lapiseira Pentel",
        categoria: "Escolar",
        valor: 7.50
    },
]


// function listar() {
//     produtos.forEach(p => {
//         console.log(p)
//     })
// }

// function prodEscolar (value){
//     if (value.categoria == "Escolar")
//     return value;
// }
// var produtosEscolar = produtos.filter(prodEscolar);
// produtosEscolar.forEach(produtoEscolar => { 
//     console.log(produtoEscolar);
// })

// function prodEletronico (value){
//     if (value.categoria == "Eletrônico")
//     return value;
// }
// var produtosEletronico = produtos.filter(prodEletronico);
// produtosEletronico.forEach(produtoEletro => { 
//     console.log(produtoEletro);
// })

function valor (value){
    let min_valor = 0
    let max_valor = 2000
    if (value.valor >= min_valor && value.valor <= max_valor) 
    return value;
    else {
        console.log("Existe não, amigo brother")
    }
}
var valor = produtos.filter(valor);
valor.forEach(valor => { 
    console.log(valor);
})