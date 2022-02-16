// TASK 1
let button1 = document.querySelector("#task1")
let input1 = document.querySelector("#newlink")
let img = document.querySelector("img")

button1.addEventListener("click", (e)=>{
   img.src = input1.value
})

img.classList.add("black")

img.addEventListener("mouseover", (e)=>{
    e.target.classList.toggle("black")
    console.log(e.target.classList)
})

/* img.addEventListener("mouseout", (e)=>{
    e.target.classList.toggle("black")
})
 */

// 2. 

// 1 * 3 = 3
// 2 * 3 = 6

document.querySelector("#task2").addEventListener("click", ()=>{
    let number = document.querySelector("#number").value;

    for(let i = 1; i <= 10; i++){
        document.querySelector("#szorzotabla").innerHTML += `${number} \t* ${i} = ${number*i}\n`
    }
})

// 3. 

const links = document.querySelector("#hivatkozasok");
document.querySelectorAll("a").forEach(e => e.style.display = "none")
document.querySelectorAll("a").forEach(e => links.innerHTML += `<li><a href="${e.href}">${e.innerHTML}</a></li>`)

// 4.
// 17px az első -3px
let asd = 1;


let x=20
document.querySelectorAll("h3.titles").forEach(e => e.style.fontSize = (x-=3) + "px" )

// 5.
const videogames = [
    {
        title: "League of Legends",
        year: 2009,
        genre: "MOBA",
        publisher: "Riot Games",
    }, 
    {
        title: "Rocket League",
        year: 2015,
        genre: "Sports",
        publisher: "Psyonixapex",
    },
    {
        title: "Apex Legends",
        year: 2019,
        genre: "Battle Royal",
        publisher: "EA",
    },

]

// let row = table.insertRow(); row.insertCell().innerHTML = "asd"; 

const tablediv = document.querySelector("#tablediv");
const table = document.createElement("table")
let rowth = document.createElement("tr")
table.append(rowth)
for(const prop in videogames[0]){
    let cell = document.createElement("th")
    cell.innerHTML = prop;
    rowth.append(cell)
}

videogames.forEach(x => {
    let row = table.insertRow();
    for(const prop in x){
        row.insertCell().innerHTML = x[prop];
    }
})

tablediv.prepend(table)

document.querySelector("#newrow").addEventListener("click", ()=>{
    let row = table.insertRow();
    document.querySelectorAll(".gameinput").forEach(e => {
        row.insertCell().innerHTML = e.value;
    })
})