const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

const images = {
    bird: new Image(),
    bg: new Image(),
    col: new Image()
}

const oszlopok = []
const RES = 150
const OSZLOP_TAVOLSAG = 300
const OSZLOP_SEBESSEG = -200

images.bird.src = 'images/bird.png'
images.bg.src = 'images/bg.png'
images.col.src = 'images/column.png'
isGameOn = true;
let points = 0
let highscores = [
    {
        name: "Gazsi",
        points: 30
    },
    {
        name: "Béla",
        points: 50
    }
]

function renderHighscores(){
   let ol = document.querySelector("ol")
   ol.innerHTML = ""
   highscores.sort(function (a, b) {
        return a.points - b.points;
    });
    highscores.reverse()
   for(item of highscores){
    let li = document.createElement("li")
    li.innerHTML = `${item.name}: ${item.points}pt`
    ol.append(li)
   }
}
if(localStorage.getItem("highscores")) {
    highscores = JSON.parse(localStorage.getItem('highscores'))
    document.querySelector("#highscore").innerHTML = `Highscore`
}
renderHighscores()
let bird = {
    x: 50,
    y: canvas.height / 2,
    w: 40,
    h: 40,
    vy: 0, //pixel/s
    ay: 250 //pixel/s^2
}
function restart(){
    bird = {
        x: 50,
        y: canvas.height / 2,
        w: 40,
        h: 40,
        vy: 0, //pixel/s
        ay: 250 //pixel/s^2
    }
    oszlopok.shift()
    oszlopok.shift()
    ujOszlop();
    points = 0
    elozoIdo = performance.now()
    isGameOn = true
    bird.vy = -250
   // document.querySelector("div").hidden = true;
}
canvas.style = 'border: 1px solid gray; border-radius: 1em'

let lastTime = performance.now()
function gameCycle(now = performance.now()){
    if(isGameOn){
        const dt = (now - lastTime) / 1000
        lastTime = now
        draw()
        update(dt)
        
         requestAnimationFrame(gameCycle)
    }
   
}

function update(dt) {
    // állapottér módosítása
    if((bird.y < 0 || bird.y > canvas.height-bird.h) && isGameOn) gameOver()
    if(utkozikE(bird, oszlopok[0])) gameOver()
    if(utkozikE(bird, oszlopok[1])) gameOver()

    if(oszlopok[0].x < 0){
        oszlopok.shift()
        oszlopok.shift()
        ujOszlop();
        points++;
    }
    bird.vy += dt * bird.ay
    bird.y +=  dt * bird.vy
    oszlopok.forEach(oszlop => oszlop.x += OSZLOP_SEBESSEG * dt)
}

function draw() {
    // kirajzolni az állapotteret
    ctx.font = 'bold 30px serif'
    ctx.drawImage(images.bg, 0, 0, canvas.width, canvas.height)
    ctx.fillStyle = 'red'
    ctx.fillText(`Points: ${points}`, canvas.width - 150, 30)
    ctx.drawImage(images.bird, bird.x, bird.y, bird.w, bird.h)
    oszlopok.forEach(oszlop => 
        ctx.drawImage(images.col, oszlop.x, oszlop.y, oszlop.w, oszlop.h)
    )
}

document.addEventListener('keydown', (e) => {
    if (e.code !== 'Space')
        return;
    bird.vy = -250
})

function random(a,b){
    return Math.floor(Math.random() * (b-a+1))+a
}
function ujOszlop(){
    const h = random(10,canvas.height/2)
    oszlopok.push(
        {
            x: canvas.width,
            y: 0,
            w: 30,
            h: h
        },
        {
            x: canvas.width,
            y: h + RES,
            w: 30,
            h: canvas.height - RES -h
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
function gameOver(){
    isGameOn = false;
    if(points > highscore){
        console.log("asd")
    }
    // alert("Game Over! :c")
    console.log("Game over!")
    //restart()
    document.querySelector("div").hidden = false;
}
document.querySelector("#gomb").addEventListener("click", ()=> {
    let name = document.querySelector("#name").value
    let obj = {
        name: name,
        points: points
    }
    highscores.push(obj)
    localStorage.setItem("highscores", JSON.stringify(highscores))
    renderHighscores()
    restart()
})
//START
ujOszlop()
gameCycle()

// AMIKOR A JÁTÉKNAK VÉGE VAN MEGJELENIK EGY GOMB ÉS EGY INPUTMEZŐ
// Meg tudjuk adni a nevünket
// elmenti localstorageba
// egy táblázatban kiírja az eddigi összes elmentettet