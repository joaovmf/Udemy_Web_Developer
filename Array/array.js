console.log (typeof Array, typeof new Array, typeof [])

let aprovados = new Array ('bia','carlos','ana') //forma não literal de escrita do array 
console.log (aprovados)

aprovados = ['bia','carlos','ana']
console.log (aprovados[0])
console.log (aprovados[1])
console.log (aprovados[2])
console.log (aprovados[3])

aprovados[3] = 'paulo'
console.log (aprovados[3])
aprovados.push ('Abia') //também adiciona um novo elemento dentro do array
console.log (aprovados.length)

aprovados [9] = 'rafael'
console.log (aprovados.length)  
console.log (aprovados[8] === undefined)
console.log (aprovados)

aprovados.sort() //organiza em ordem alfabética o array
console.log (aprovados)

delete aprovados [1]
console.log (aprovados[1])
console.log (aprovados[2])

aprovados = ['bia', 'carlos', 'ana']
aprovados.splice (1,1) //exclui um elemento
console.log (aprovados)

aprovados = ['bia', 'carlos', 'ana']
aprovados.splice (1,2, 'Elemento1', 'elemento2') //exclui dois elementos e depois adicionou dois elementos. 
console.log (aprovados)

// a diferença do splice para o delete é que no splice posso excluir e adicionar elementos. Delete apenas excluo.

