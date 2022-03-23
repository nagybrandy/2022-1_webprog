let osztalyzatok = [22, 13, 26, 27, 28, 30, 30, 25, 17, 18, 21, 21, 25, 26]

document.querySelector("#f1-1").innerHTML += osztalyzatok.filter(e => e > 24).length;
document.querySelector("#f1-2").innerHTML += osztalyzatok.reduce((e, acc) => e + acc, 0) / osztalyzatok.length;
document.querySelector("#f1-3").innerHTML += osztalyzatok.some(e => e < 10) ? " Igen volt" : " Nem, nem volt";
osztalyzatok = osztalyzatok.map(e => e + 3);
console.log(osztalyzatok)

const table = document.querySelector("table");
const button = document.querySelector("#generate");
const result = document.querySelector("#kiiras");

button.addEventListener("click", handleButtonClick);

function handleButtonClick() {
    table.innerHTML = "";
    result.innerHTML = ""; // csak azért ha új táblázatot generálsz egy másik után akkor az előző szorzás eredménye ne maradjon ott mert csúnya :D
    const rowNumber = parseInt(document.querySelector("#rows").value);
    const colNumber = parseInt(document.querySelector("#cols").value);
    if (isNaN(rowNumber) || isNaN(colNumber) || rowNumber <= 0 || colNumber <= 0) return;
    let counter = 1;
    for (let i = 0; i < rowNumber; i++) {
        let tr = document.createElement("tr");
        for (let j = 0; j < colNumber; j++) {
            let td = document.createElement("td");
            td.innerHTML = counter++;
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
}

let numbers = 0;
let list = [];
table.addEventListener("click", handleTableClick);

function handleTableClick(e) {
    if (!e.target.matches("td")) return;
    let td = e.target;
    if (numbers != 2) {
        td.style.background = "blue";
        list.push(parseInt(td.innerHTML));
        numbers++;
    }
    else {
        document.querySelectorAll("td").forEach(e => e.style.background = "");
        numbers = 0;
        list = [];
        td.style.background = "blue";
        list.push(parseInt(td.innerHTML));
        numbers++;
    }
    if(numbers == 2) {
        result.innerHTML = list[0] + " * " + list[1] + " = " + list.reduce((e, acc) => e * acc, 1);
    }
    
}