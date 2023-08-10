let person1={
    name:"person1",
    age:"age1"
}
let person2={
    name:"person2",
    age:"age2"
}
let person3={
    name:"person3",
    age:"age3"
}
let person4={
    name:"person4",
    age:"age4"
}
let person5={
    name:"person5",
    age:"age5"
}
let person6={
    name:"person6",
    age:"age6"
}
let person7={
    name:"person7",
    age:"age7"
}
let person8={
    name:"person8",
    age:"age8"
}
let list=[person1,person2,person3,person4,person5,person6,person7,person8]
function random(min,max){
    let randomNumber=min+Math.floor(Math.random()*(max-min))
    return randomNumber
}
let b=random(0,list.length-1)
document.getElementById("name").innerHTML=list[b].name
document.getElementById("age").innerHTML=list[b].age


