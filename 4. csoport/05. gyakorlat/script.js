let groups = document.querySelectorAll("optgroup")
let pets = document.querySelector("label")
let data = [
    {
        "name" : groups[0].label,
        "options": [...groups[0].querySelectorAll("option")]
    },
    {
        "name" : groups[1].label,
        "options": [...groups[1].querySelectorAll("option")]
    }
]

pets.children[0].remove()
let select = document.createElement("select")
for(item of data){
    console.log(item.name)
    let option = document.createElement("option")
    option.value = item.name    
    option.innerHTML = item.name    
    select.append(option)
}
pets.append(select)

select.addEventListener("change", (e)=>{
    if(pets.children[1]) pets.children[1].remove()
    let select = document.createElement("select")
    console.log(e.target.value)
    if(e.target.value == data[0].name){
        for(animal of data[0].options){
            console.log(animal)
            select.append(animal)
        } 
    } else {
    for(animal of data[1].options){
            console.log(animal)
            select.append(animal)
        }
    }
    pets.append(select)
})

const heightinput = document.querySelector("#height")
const widthinput = document.querySelector("#width")
const ginput = document.querySelector("#grayscale")
const div = document.querySelector("div")
const checkbox = document.querySelector("input[type=checkbox]")

if(checkbox.checked) ginput.disabled = false
else ginput.disabled = true

heightinput.addEventListener("input", (e)=>{
    div.style.height = `${heightinput.value}px`
})
widthinput.addEventListener("input", (e)=>{
    div.style.width = `${widthinput.value}px`
})

ginput.addEventListener("input", ()=>{
    document.querySelector("img").style.filter = `grayscale(${ginput.value}%)`
})

checkbox.addEventListener("input", (e)=>{
    if(checkbox.checked) ginput.disabled = false
    else ginput.disabled = true
})
const ps = document.querySelectorAll("p")

ps.forEach( p => {
    p.addEventListener("click", (event)=>{
        console.log(p.dataset.size)
        ps.forEach(i => i.style.fontSize = p.dataset.size + "px")
    })
})

const form = document.querySelector("form")

form.addEventListener("submit", (e)=>{
    e.preventDefault()
    if (!(/.*@.*\..{2,}/).test(form.email.value)) {
        form.email.style = "border: 1px solid red";
    } else {
        form.email.style = "border: 1px solid black";
    }
    if (!(/\d{7,15}/).test(form.phone.value)) {
        form.phone.style = "border: 1px solid red";
    } else {
        form.phone.style = "border: 1px solid black";
    }
})