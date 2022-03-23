let opts = document.querySelectorAll("optgroup")
let pets = document.querySelector("label")

console.log(opts[0])

let data = [
    {
        name : opts[0]['label'],
        options : [...opts[0].querySelectorAll("option")]
    },
    {
        name : opts[1]['label'],
        options : [...opts[1].querySelectorAll("option")]
    },
]

pets.children[0].remove()

let select = document.createElement("select")
for(item of data){
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
