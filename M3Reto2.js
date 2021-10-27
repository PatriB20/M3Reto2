
const readline =require ("readline")
const fs = require("fs/promises")
const { Agent } = require("http")
const wyR = require("./write.js")

class Person 
{ 
    constructor(name,surname,age)
    {
        this.name=name
        this.surname=surname
        this.age=age
    }
}

function pregunta(preguntaN){
    const question = new Promise ((resolve,reject) =>{
        const rl = readline.createInterface( {
            input: process.stdin,
            output: process.stdout
        });
        rl.question (preguntaN,(name) =>{
            resolve(name);
                    rl.close()  
         } )
                
     } )
    return question;
}

let person2 = new Person ()

pregunta("nombre? ")
.then (function(nombre)
{
    person2.name= nombre
    return pregunta("apellido? ")
})
.then (function (apellido)
{
    person2.surname=apellido
    return pregunta("edad? ")
}
)
.then (function(edad)
{
    person2.age=edad
    return wyR.write("hola.json",JSON.stringify(person2))
}
)






