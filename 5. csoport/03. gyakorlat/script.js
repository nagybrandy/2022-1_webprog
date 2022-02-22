//TASK1
let links = [...document.querySelectorAll("a")].filter(e => !e.host.includes("elte.hu"))
links.forEach(e => e.classList.add("disabled"))


//TASK2
let task2div = document.querySelector("#task2")
let height = document.querySelector("#height")
let width = document.querySelector("#width")

height.addEventListener("input", ()=>{
   task2div.style.height = height.value + "px"
})

width.addEventListener("input", ()=>{
    task2div.style.width = width.value + "px"
 })


//TASK 3

const ul = document.querySelector("ul")
ul.addEventListener("click", kattintas)

function kattintas(e){
    console.log(e.target)

    console.log(e.target.parentElement.children)
    if(e.target.matches("li")) e.target.classList.toggle("pipa");
}

// TASK 4

const tablediv = document.querySelector("#table");
const table = document.createElement("table")
for(let i = 0; i < 10; i++){
    let rowth = document.createElement("tr")
    table.append(rowth)
    for(let j = 0; j < 10; j++){
        let cell = document.createElement("td")
        rowth.append(cell)
    }
}
tablediv.append(table)

table.addEventListener("click", (e)=>{
    console.log(e.target)
    if(e.target.matches("td")) e.target.style.backgroundColor = document.querySelector("#cinput").value
})