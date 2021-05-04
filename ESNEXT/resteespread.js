//operador ... rest(juntar)/spread(espalhar)

//usar rest como parâmetro de função 

function total (...numeros) {
    let total = 0 
    numeros.forEach (n => total += n)
    return total
}

console.log (total(2,3,4,5))

//usar spread com objeto 
const funcionario = {nome: 'maria', salario: '12348.99'}
const clone = { ativo : true , ...funcionario}
console.log (clone)

//usar spread com array 
const grupoA = ['Joao' , 'Pedro' , 'Gloria']
const grupofinal = ['Maria' , 'Rafaela ', ...grupoA]

console.log (grupofinal)