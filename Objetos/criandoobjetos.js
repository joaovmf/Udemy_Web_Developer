// usando notação literal 
const obj = {}
console.log (obj)

//object em JS 
console.log (typeof Object, typeof new Object)
const obj2 = new Object 
console.log (obj2)

//funções construtoras 
function produto (nome,preco,desc) {
    this.nome = nome 
    this.getprecocomdesconto = () => {
        return preco * (1 - desc)
    }
}

const p1 = new produto ('caneta', 7.99, 0.15)
const p2 = new produto ('notebook', 2998.99,0.25)
console.log(p1.getprecocomdesconto(), p2.getprecocomdesconto())

// função factory 
function criarfuncionario (nome,salario,faltas) {
    return {
        nome, 
        salario, 
        faltas,
        getsalario () {
            return (salario / 30) * (30 - faltas)
        }
    }
}

const f1 = criarfuncionario ('joão',7980,4)
const f2 = criarfuncionario ('maria',11400,1)
console.log (f1.getsalario(), f2.getsalario())

//object.create
const filha = Object.create (null)
filha.nome = 'ana'
console.log (filha)

//uma função famosa que retorna um objeto. 
const fromJSON = JSON.parse('{"info" : "Sou um JSON"}')

console.log (fromJSON.info)
