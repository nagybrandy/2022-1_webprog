// 1. feladat
const button1 = document.querySelector("#task1btn");
const img = document.querySelector("img");
const input = document.querySelector("#newlink");

button1.addEventListener("click", (e) => {
    img.src = input.value;
})

//2. feladat

//  1 * 8 = 8
//  2 * 8 = 16

const number = document.querySelector("#number");
const button2 = document.querySelector("#task2btn");
const tábla = document.querySelector("#szorzotabla")

button2.addEventListener("click", () => {
    tábla.value = "";
    for (let i = 1; i <= 10; i++) {
        tábla.value += `${i} \t* \t${number.value} \t= \t${i * number.value}\n`;
    }
})

//3. feladat

const links = document.querySelector("#hivatkozasok");
document.querySelectorAll("a").forEach(e => links.innerHTML += `<li><a href="${e.href}">${e.innerHTML}</a></li>`)
//document.querySelectorAll("a").forEach(e => links.innerHTML += `<li><a href="${e.href}">${e.innerHTML}</a></li>`)


//4. feladat
// 1. cím a legnagyobb - 17px; a többi mindig 3-mal kisebb
let x=20
document.querySelectorAll("h3.titles").forEach(e => e.style.fontSize = (x-=3) + "px" )

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

const tablediv = document.querySelector("#tablediv");
const table = document.createElement("table");

let rowh = table.insertRow();
for(const prop in videogames[0]){
    let th = document.createElement("th")
    th.innerHTML = "<b>" + prop + "</b>";
    rowh.append(th)
}
table.append(rowh)

videogames.forEach(x =>{
    let row = table.insertRow();
    for(const prop in x){
        row.insertCell().innerHTML = x[prop];
    }
})
// append --> végére, prepend --> elejére
tablediv.prepend(table)

// let row = table.insertRow(),  let cell = row.insertCell(), cell.innerHTML = ""

document.querySelector("#newrow").addEventListener("click", ()=> {
    let row = table.insertRow();
    document.querySelectorAll(".gameinput").forEach(e => {
        row.insertCell().innerHTML = e.value
    })
})