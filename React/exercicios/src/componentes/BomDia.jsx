import React from 'react'

export default props => 
    <div> 
    <h1>Bom dia {props.nome}!</h1>
    <h2>Até breve</h2>
    </div> 

//props é o parametro da função! por convenção se usa props, mas pode-se utilzar qualquer nome. 
//ao inves de envolver numa div, posso colocar <React.fragment> ou só <Fragment>
// posso colocar dentro de um array ao inves de div. Porém tenho que colocar uma "key" dentro do h1. <h1 key='h1'>Bom dia</h1>



//Acima é apenas uma função como qualquer outra. Abaixo podemos ver outro exemplo igual melhor de se entender
/* export default function (props) {
<div>
<h1>Bom dia {props.nome}!</h1>
<h2>Até breve</h2>
</div>
} */
