function salario (horas, valorhora) {
const salariobruto = horas * valorhora 
const salariototal = salariobruto - salariobruto * 30/100
console.log ('Salario igual a R$', salariototal)
}

salario (180,60)