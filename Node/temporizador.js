const schedule = require ('node-schedule')

const tarefa1 = schedule.scheduleJob('*/5 * 16 * * 6', function () { // lê-se: 5 em 5 segundos, as 16h do sábado (6)
    console.log ('Executando tarefa 1!', new Date().getSeconds())
})

setTimeout(function () {
    tarefa1.cancel()
    console.log ('Cancelando tarefa 1!')
}, 20000)

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(0,6)] //domingo a sabado
regra.hour = 16
regra.second = 30

const tarefa2 = schedule.scheduleJob(regra, function () {
    console.log ('Executando tarefa 2!', new Date().getSeconds())
})

// isso é um modulo que define hora e data para cumprir uma tarefa 
// lê-se melhor: de 5 em 5 segundos (*/5 *), na hora 16h (16) em qualquer minuto e segundo (* *), no sabado (6),
//execute essa tarefa. Os dias são - 0 é domingo e 6 é sabado. 

//abaixo fizemos um cancelamento da tarefa 1 após 20 segundos e também a tarefa 2 sem usar o módulo schedule, 
//utilizando apenas JS. 