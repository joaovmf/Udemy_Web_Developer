{
    {
        {
            {
                 var sera = 'Será???'
                 //console.log (sera)
            }
        }
    }
}
console.log (sera)
//variável var, dentro de um bloco de código (que nao seja função), aparece tanto dentro quanto fora do bloco.

function teste () {
    var local = 123
    console.log (local)
}
//quando você define uma variavel dentro de uma funcao ela só está exposta no escopo da função, não aparecendo fora dela. 
teste ()
console.log (local)

