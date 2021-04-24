
function contador (vetor) {
    let pares = 0 
    let impares = 0
          for (let i = 0 ; i < vetor.length; i++){
              if (vetor[i] % 2 == 0){
                  pares++
              }else{
                  impares++
              }
          }
          console.log (pares, ': quantidade de pares. ', impares, ': quantidade de impares.')
  }
  
  vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
  contador(vetor)

  //acima mostrei a quantidade de pares e de impares. 
  // posso fazer diversas operações com esse modelo.
  // Por exemplo abaixo, irei fazer para o console dizer qual numero é par e qual é impar

  function contador (vetor) {
    let pares = 0 
    let impares = 0
          for (let i = 0 ; i < vetor.length; i++){
              if (vetor[i] % 2 == 0){
                  console.log (vetor [i], ' :par')
              }else{
                  console.log (vetor [i], ' :impar')
              }
          }
          
  }
  
  vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
  contador(vetor)

  //e também posso fazer com que ele diga só os pares e só os impares retirando 1 dos consoles.log acimas