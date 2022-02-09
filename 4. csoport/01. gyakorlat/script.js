let shapes = ["circle", "rect", "rect", "circle", "circle", "rect", "circle", "circle","rect"]
let originalDiv = document.querySelector("#original")
let t1div = document.querySelector("#t1")
let t2div = document.querySelector("#t2")
let t3div = document.querySelector("#t3")
let t4div = document.querySelector("#t4")
let t5div = document.querySelector("#t5")
let t6div = document.querySelector("#t6")
let t7div = document.querySelector("#t7")
let t8div = document.querySelector("#t8")

// Original
draw(shapes, originalDiv);

// 1. Az eredeti tömb minden eleme legyen kör!
let task1 = shapes.map(e => "circle")
draw(task1,t1div);

// 2. Mennyi ennek a tömbnek az összege? [1,2,3,4,5]
let task2 = [1,2,3,4,5]
let total = task2.reduce((p, c) => p + c);
t2div.innerHTML = total;

// 3. Csak a négyzeteket tartsuk meg!
let task3 = shapes.filter(e => e === "rect")
draw(task3, t3div)

// 4. Az első négyzet helye?
let task4 = shapes.findIndex(e => e === "rect")
t4div.innerHTML = task4;

// 5. Van négyzetünk a tömbben?
t5div.innerHTML = shapes.includes("rect") ? "Van" : "Nincs";
// let task5 = shapes.some(e => e === "rect")

// 6. Minden elem kör?
t6div.innerHTML = shapes.every(e => e ==="circle") ? "Igen" : "Nem";

// 7. Hány négyzet és hány kör van?
/* let task7R = shapes.filter(e => e == "rect").length;
let task7C = shapes.filter(e => e == "circle").length;
t7div.innerHTML = "r:" + task7R + " c: " + task7C; */

let task7 = shapes.reduce(
    (s,x) => {
        x === 'circle' ? s.c +=1 : s.r += 1
        return s;
    },
    {
        c: 0, r: 0
    }
)
t7div.innerHTML = "r:" + task7.c + " c: " + task7.r;

// 8. A harmadik elemtől kezdve mindegyik legyen kör!
let task8 = shapes.fill("circle",2)
draw(task8, t8div)


function draw(array, div){ // melyik tömböt rajzolja le és hova
    for(let i = 0; i < array.length;i++){
        var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        let svgNS = svg.namespaceURI;
        svg.setAttribute('width',60);
        svg.setAttribute('height',60);
        var shape = document.createElementNS(svgNS,array[i]);
        if(array[i] == "rect"){
           shape.setAttribute('width',60);
           shape.setAttribute('height',60);
           shape.setAttribute('fill','#fcba03');
        } else {
           shape.setAttribute('cx',30);
           shape.setAttribute('cy',30);
           shape.setAttribute('r',30);
           shape.setAttribute('fill','#034701');
        }
       
        svg.appendChild(shape);
        div.appendChild(svg)
    }
    
}
