const sequencia = {
    _valor: 1, //convenção (pretendida ser acessada apenas internamente).
    get valor () {return this._valor++}, //get e set são funções. Dentro dessas funções os valores são acessados. 
    set valor (valor) {  //no set passo o valor 
        if (valor > this._valor) {
            this._valor = valor
        }
    }
}
// a vantagem de você acessar os valores através de uma função é que você pode fazer um tipo de validação ou processamento dos dados antes de devolver o valor da variável. 

console.log (sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log (sequencia.valor, sequencia.valor)
sequencia.valor = 900 // não pode trazer para um valor menor do que a sequencia já tem. 
console.log (sequencia.valor, sequencia.valor)