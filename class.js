class Emp{
    constructor(name,location){
        this.name=name
        this.location=location
    }
}
//let a=new Emp("raju")
//console.log(a)
class Student extends Emp{
    constructor(name,location,age,sal){
        super(name,location)
        this.age=age
        this.sal=sal
    }
    d(){
        console.log(`${this.name} ${this.location} ${this.age} ${this.sal}`)
    }
}
let b=new Student("raju","goa",32,50000)
console.log(b)
b.d()
let c=new Student("ravi","bengaluru",30,45900)
c.d()