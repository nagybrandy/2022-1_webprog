const h1 = document.querySelector('#nev');
const button = document.querySelector('button');

let name;
name = 'Győzike';
button.addEventListener("click", nevmodosit);

function nevmodosit(){
    h1.innerHTML = `Hello győzike!`;
}

