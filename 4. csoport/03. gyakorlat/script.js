// TASK1

let nemeltes = [...document.querySelectorAll("div a")].filter(e => !e.href.includes("elte.hu"))
nemeltes.forEach(e => e.classList.add("inaktiv"))

//TASK 2

let t2div = document.querySelector("#t2div")
t2div.style.height = "50px"
t2div.style.width = "50px"
t2div.style.backgroundColor = "green"

let height = document.querySelector("#height")
let width = document.querySelector("#width")

height.addEventListener("input", change)
width.addEventListener("input", change)

function change(e){
    console.log(e.target.id)

    if(e.target.id == "height") t2div.style.height = height.value +"px"
    else t2div.style.width = width.value +"px"
    // document.querySelector("img").style.filter = `grayscale(${width.value}%)`
}

//TASK3

document.querySelector("ul").addEventListener("click", kesz)

function kesz(e){
        console.log(e.target)
        console.log(this)
        if(e.target.matches("li")) e.target.classList.toggle("done")
}

//TASK4
let table = document.createElement("table")
const tablediv = document.querySelector("#table")

for(let i = 0; i < 10; i++){
    let row = document.createElement("tr")
    table.append(row)
    for(let j = 0; j <10; j++){
        row.append(document.createElement("td"))
    }
}
tablediv.append(table)

table.addEventListener('click', cellClick);

function cellClick(e) {
    if(e.target.matches("td")){
        const val = document.querySelector('#cinput').value;
        console.log(val)
        e.target.style.backgroundColor = `${val}`;
    }  
}