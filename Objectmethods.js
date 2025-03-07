let student= {name:"Swati",age:22,lastname:"Patil"}
//gives keys of an object
console.log(Object.keys(student));
//gives values of an object
console.log(Object.values(student));
//display object key-value pairs in an array
console.log(Object.entries(student));
//it checks whether object contain the property/key 
console.log(student.hasOwnProperty("name"));