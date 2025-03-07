//creating object using object literal {}
let obj={
    name:"Swati",
    age:22,
    gender:"F"
}
console.log(obj)
//creating object using object constructor
let obj1=new Object();
obj1.name="Prajwal"
obj1.age=20
obj1.gender="M"
console.log(obj1)
//to add property to object
obj.car_name="BMW"
obj1.car_color="Navy blue"
console.log(obj)
console.log(obj1)
//to delete
delete obj1.car_color
console.log("deleted",obj1)
//to update
obj.car_name="Range Rover"
console.log("updated",obj)
//accessing a specific property
console.log(obj.car_name)
console.log(obj1["name"])
//to check property exsits ir no
console.log("name" in obj)
console.log(obj1.hasOwnProperty("car_color"))
//for..in for iteration
for(keys in obj){
    console.log(`${keys} : ${obj[keys]}`)
}
let copied_object=Object.assign({},obj,obj1)
console.log("Object.assign() to merge the objects", copied_object)
console.log("To check number of keys: ",Object.keys(obj))//returns key names
console.log("to get the length of object with key",Object.keys(obj).length)