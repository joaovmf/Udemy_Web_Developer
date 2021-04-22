// Clousure é o escopo criado quando uma função é declarada 
//Esse escopo permite a função acessar e manipular variáveis externas a função. 

//contexto léxico em ação! 

const x = "global"

function fora () {
    const x = 'local'
    function dentro () {
        return x 
    }
    return dentro 
}

const minhafuncao = fora ()

console.log (minhafuncao())