const produto = [{nome: 'notebook', preco: '2499', fragil: true},
{nome: 'ipad pro', preco: 4199, fragil:true},
{nome: 'copo de vidro', preco: 12.49, fragil:true},
{nome:'copo de plastico', preco: 18.99, fragil:false}
]

//console.log (produto.filter(function(p) {
    //return p.preco >= 500 //faco o que eu quiser. Se retornar falso nao passa nenhum elemento, true passa todos, p.produto > 2500 só passa os maiores de 2500 e assim sucessivamente.
//}))

const caro = produto => produto.preco >= 500

const fragil = produto => produto.fragil == true

console.log (produto.filter(caro).filter(fragil))

