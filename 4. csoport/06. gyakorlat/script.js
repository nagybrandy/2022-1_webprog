// ADATOK
const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")
// madar: magassag, szelesseg, sebesség, gyorsulása, x, y
let madar = {
    x: 50,
    y: canvas.height / 2,
    w: 50,
    h: 50,
    vy: 0, //px/s
    ay: 250 //px/s^2
}

const oszlopok = []
const res = 150;
const oszlop_tavolsag = 300;
const oszlop_sebesseg = -200

let points = 0
let hscore = 0
if(localStorage.hscore){
    hscore = localStorage.hscore
    document.querySelector("#highscore").innerHTML = "Highscore: " + hscore
}


// START
let elozoIdo = performance.now()
ujOszlop()

function restart(){
    madar = {
        x: 50,
        y: canvas.height / 2,
        w: 50,
        h: 50,
        vy: 0, //px/s
        ay: 250 //px/s^2
    }
    elozoIdo = performance.now()
    oszlopok.shift()
    oszlopok.shift()
    ujOszlop()
    points = 0
}

function jatekciklus(most = performance.now()) {
    const dt = (most - elozoIdo) / 1000
    elozoIdo = most
    update(dt) // adatok változásai
    draw() // kirajzolni
    requestAnimationFrame(jatekciklus)
}

function update(dt) {
   if(oszlopok[0].x < 0) {
        oszlopok.shift()
        oszlopok.shift()
        ujOszlop()
        points++
   }
   madar.vy += madar.ay * dt;
   madar.y += madar.vy * dt;
   if (madar.y < 0 || madar.y > 400) gameOver()
   oszlopok.forEach(oszlop => oszlop.x += oszlop_sebesseg * dt)
   if(utkozikE(madar,oszlopok[0])) gameOver()
   if(utkozikE(madar,oszlopok[1])) gameOver()
}

function draw(){

    ctx.fillStyle = "lightblue"
    ctx.fillRect(0,0,canvas.width,canvas.height)
    ctx.fillStyle = "brown"
    ctx.fillRect(madar.x, madar.y, madar.w, madar.h)
    ctx.fillStyle = "white"
   
    oszlopok.forEach(oszlop =>
       ctx.fillRect(oszlop.x, oszlop.y, oszlop.w, oszlop.h)
    );
    ctx.fillStyle = "brown"
    ctx.font = "25px Arial"
    ctx.fillText(`Points:${points}`, 30,30)
}

function random(a,b){
    return Math.floor(Math.random() * (b-a+1)) +a
}
function ujOszlop(){
   
    const h = random(10, canvas.height/2)
    oszlopok.push(
        {
            x: canvas.width,
            y: 0,
            w: 30,
            h: h
        },
        {
            x: canvas.width,
            y: h + res,
            w: 30,
            h: canvas.height - res - h
        }
    )
}
function utkozikE(a, b) {
    return !(
        b.y + b.h  < a.y ||
        a.x + a.w < b.x ||
        a.y + a.h  < b.y ||
        b.x + b.w < a.x
    );
}
document.addEventListener("keydown", (e)=> {
    if(e.code == "Space") madar.vy = -250
})

// ENDGAME

function gameOver(){
    console.log("GameOver")
    highscore()
    restart()
}
function highscore(){
    console.log(hscore)
    if(points > hscore) {
        hscore = points
        document.querySelector("#highscore").innerHTML = "Highscore: " + hscore
        localStorage.setItem("hscore", hscore)
    }
}
jatekciklus()