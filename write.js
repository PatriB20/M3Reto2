const fs= require("fs/promises")

class Person 
{ 
    constructor(name,surname,age)
    {
        this.name=name
        this.surname=surname
        this.age=age
    }
}

let person1 = new Person("laura", "perez", 23)

function write(archivo,obj){
fs.writeFile(archivo,JSON.stringify(obj))
.then(() =>{
    return fs.readFile(archivo,"utf-8")
})
.then( data =>{
    console.log (JSON.parse(data));
})
.catch(err =>{
    console.log(err)
})
}
// write("1234.json",person1)
module.exports={write}