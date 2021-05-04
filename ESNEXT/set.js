//não aceita repetição / não indexada
const times = new Set() 
times.add('vasco')
times.add ('são paulo').add('palmeiras').add('corinthians')
times.add ('flamengo')
times.add('vasco') 

console.log (times)
console.log (times.size)
console.log (times.has('vasco'))
console.log (times.has('Vasco'))
times.delete('flamengo')
console.log (times.has('flamengo'))

