function contador (vetor) {
    let entre1020 = 0 
    let fora = 0
          for (let i = 0 ; i < vetor.length; i++){
              if (vetor[i] >= 10 && vetor [i] <= 20){
                  entre1020++
              }else{
                  fora++
              }
          }
          console.log (entre1020, ': quantidade entre 10 e 20', ' / ' , fora, ': quantidade fora de 10 e 20.')
  }
  
  vetor = [10,15,20,25,30,35,40]

  contador(vetor)
