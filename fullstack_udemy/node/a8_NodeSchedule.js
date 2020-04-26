const schedule = require('node-schedule');

const event1 = schedule.scheduleJob('5 0 12 1 * * *', function(){
    console.log("Executando evento1!!");
});

event1.cancel();

const regra = schedule.RecurrenceRule();
regra.dayOfWeek = [new schedule.Range(1, 5)];
regra.hour = 12;
regra.second = 5;

const event2 = schedule.scheduleJob(regra, function() {
    console.log("Evento 2 iniciando!");
});

event2.cancel();