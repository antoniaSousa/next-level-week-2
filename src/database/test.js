const Database = require('./db')
const createProffy = require('./createProffy')
Database.then(async(db) => {
    //Inserir dados
    proffyValue = {
        name: 'Mayk Brito',
        avatar: 'https://avatars2.githubusercontent.com/u/6643122?s=460&u=1e9e1f04b76fb5374e6a041f5e41dce83f3b5d92&v=4',
        whatsapp: '989373637',
        bio: 'Instrutor de Educação Física',
    }
    classValue = {
        subject: "Química",
        cost: "20",
    
    }
    classScheduleValues = [
        {
    weekday: 1,
    time_to: 1220,
    time_from: 720
    
    },
   { weekday: 0,
    time_to: 1220,
    time_from: 520
    
   }
]
createProffy(db, proffyValue, classValue, classScheduleValues)

    //Consultar os dados inseridos

})