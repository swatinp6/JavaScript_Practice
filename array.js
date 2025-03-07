let a=[]
let b=[10,20,30]
console.log(a)
console.log(b)
let c=new Array(40,50,60)
console.log(c)
//spice() method is used to remove or replace an elements from an array
//Syntax: arra_name.splice(index,deletecount,item1,item2,....)
let splice_array=b.splice(1,1,40,50,60)
console.log(splice_array)
console.log(b)
a.length=2
console.log(a)
// b.length=6
// console.log(b)
for(i=0;i<b.length;i++){
    console.log(b[i])
}
b.forEach((items)=>{
    console.log("using forEach loop which don't change or modify the original array: ",items)
})
d=[]
b.forEach((items)=>{
    d.push(items+1)
})
console.log("copying elements from b to d",d)
console.log("to concat array,concat() method is used: ",b.concat(d))
console.log(b + d)
console.log("checks it is array or not: ",Array.isArray(b))
