module.exports = async function(db, {proffyValue, classValue, classScheduleValues}){
//inserir dados na tabela proffys
 const insertedProffy = await db.run(`
  INSERT INTO proffys(
    name, 
    avatar,
    whatsapp,
    bio
) VALUES (
   '${proffyValue.name}',
   '${proffyValue.avatar}'
   '${proffyValue.whatsapp}'
   '${proffyValue.bio}'
);
`)
const proffy_id = insertedProffy.lastID
//inserir dados na tabela classes
const insertedClass = await db.run(`
INSERT INTO classes (
    subject,
    cost,
    proffy_id
)VALUES(
    "${classValue.subject}",
    "${classValue.cost}",
    "${proffy_id}"
);
`)

const class_id = insertedClass.lastID
//inseri dados na tabela class_schedule
const insertedAllClassScheduleValues = classScheduleValues.map((classScheduleValue)=>{
    return db.run(`
    INSERT INTO class_schedule(
        class_id,
        weekday,
        time_to,
        time_from
    )VALUES(
        "${class_id}",
        "${classScheduleValue.weekday}",
        "${classScheduleValue.time_to}",
        "${classScheduleValue.time_from}"
    );
    `)
})

// aqui vai executar todos os db.runs() das class_shedule
await Promise.all(insertedAllClassScheduleValues)
}