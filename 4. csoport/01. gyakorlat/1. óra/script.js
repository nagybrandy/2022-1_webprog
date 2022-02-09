const h1 = document.querySelector('#title')

console.log(h1.innerHTML)

let name = 'Bandi';

console.log(`Hello ${name}!`)
h1.innerHTML = name;
/* if(name) alert("igen")
else alert("nem") */

// name ? alert("igen") : alert("nem")

factorial(3)
function factorial(num){
    sum = 1;
    for(let i = num;i > 0;i--){
        sum = sum * i;
    }
    console.log(sum);
}