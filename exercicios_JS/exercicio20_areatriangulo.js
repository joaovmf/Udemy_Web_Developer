function triangulo (base, altura) {
  const area = (base * altura) / 2
  return area.toFixed(2) //irá arredondar para manter 2 casas decimais
}

console.log (triangulo(10,15))
console.log(triangulo(7,9))