let pessoa = {
    nome: 'joão',
    sobrenome: 'victor',
    nomeinteiro: function (){
        return this.nome + ' ' + this.sobrenome
    } 
}

console.log (pessoa.nomeinteiro ())

//fazendo a mesma coisa sem retorno abaixo

let pessoa2 = {
    nome: 'joão',
    sobrenome: 'victor',
    nomeinteiro: function (){
        console.log (this.nome + ' ' + this.sobrenome) 
    } 
}

pessoa2.nomeinteiro ()

//This nada mais é que um atalho para um atributo de um objeto. É preciso entender a linguagem americana.
// O this é como se evitasse a repetição do nome, reduzindo assim a frase. 
//Abaixo podemos ver a utilização do bind 

const exemplo = {
    a: 0,
    pegueA: function() {
      return this.a;
    }
  };

console.log (exemplo.pegueA())
  
  const exemplo2 = exemplo.pegueA;
  console.log(exemplo2()); // The function gets invoked at the global scope
  
  
  const exemplo3 = exemplo2.bind(exemplo);
  console.log(exemplo3());
  
  