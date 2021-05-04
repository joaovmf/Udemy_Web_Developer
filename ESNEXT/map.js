const tecnologias = new Map ()
tecnologias.set('react' , {framework: false})
tecnologias.set ('angular' , {framework: true})

console.log (tecnologias.get('react')) 
console.log (tecnologias.get('react').framework) 

const chavesvariadas = new Map ([
    [function () { }, 'Função'] ,
    [{} , 'objeto'],
    [123, 'Numero']
])

chavesvariadas.forEach((valor, chave) => {
    console.log (chave, valor)
})

console.log (chavesvariadas.has(123))
chavesvariadas.delete(123)
console.log (chavesvariadas.has(123))
console.log (chavesvariadas.size)

chavesvariadas.set(123, 'a')
chavesvariadas.set(123, 'b')
chavesvariadas.set(456, 'b')
console.log (chavesvariadas)
