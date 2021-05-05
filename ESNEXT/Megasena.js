console.log ('========= MEGA SENA DA VIRADA ================')

function gerarnumeroentre (min, max, tempo) {
        setTimeout(function(){
            const aleatorio = parseInt (Math.random() * (max - min + 1)) + min
            console.log (aleatorio)
        }, tempo)
    
}
    
gerarnumeroentre(1,60,2000)
gerarnumeroentre(1,60,4000)
gerarnumeroentre(1,60,6000)
gerarnumeroentre(1,60,8000)
gerarnumeroentre(1,60,10000)
gerarnumeroentre(1,60,12000)


