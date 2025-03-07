//iterating array,set,map etc
let a=[10,20,30,40,50]
console.log("using for..in: ")
for(let i in a){
    // console.log("using for..in index should be mentioned: ")
    console.log(a[i])
}
console.log("using for..of:")
for(let j of a){
    // console.log("without index we can iterate:")
    console.log(j)
}
console.log("length of array: "+a.length)
let map1=new Map([
    ['name','Swati'],
    ['age',23],
    ['sal',35000]
])
for(let [key,values] of map1){
    console.log(`${key}:${values}`)
}
let set1=new Set([10,20,30,40,50,30])
for(let k of set1){
    console.log(k)
}
let obj={
    name:"Prajwal",
    age:21,
    sal:40000
}
for(let obj1 of Object.keys(obj)){
    console.log(obj1)
}
for(let values in obj){
    console.log(obj[values])
}
for(let obj2 of Object.entries(obj)){
    console.log(obj2)
}