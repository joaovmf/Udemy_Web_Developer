function nota (n1,n2,n3){
   let media = ((n1 * 4) + (n2 * 3) + (n3 * 3)) / 10 //peso das notas
   if (media >= 5 && media <= 10){
       console.log ('Aprovado.')
   } else if (media <5 && media >= 0){
       console.log ('Reprovado.')
   } else {
       console.log ('ERROR - Numeros incorretos')
   }
}

nota (8,3,3)
nota (0,0,0)
nota (324423,4553,5465)