let emp={
    name:"Preeti",
    sal:30000,
    age:22
}
for(let keys in emp){
    console.log(`${keys}`)
    
}
for(let values in emp){
    console.log(emp[values])
}
console.log(typeof(emp))