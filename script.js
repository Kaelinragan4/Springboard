document.getElementById('container');

document.querySelector("#container");

document.getElementsByClassName("second");

document.querySelectorAll('#container li.third')

container.innerText = "Hello!";

let footer = document.querySelector('.footer');
footer.classList.add('main');

let footer = document.querySelector('.footer');
footer.classList.remove('main');

const li = document.querySelector('li')
let newLI = document.createElement('li');

newLI.innerText = "four";

let list = document.querySelector('ul');
list.appendChild(newLI);

let liInsideOl = document.querySelectorAll("ol li");

for (let i = 0; i < liInsideOl.length; i++){
    liInsideOl[i].style.backgroundColor = "green";
}

let footer = document.querySelector('.footer')
footer.remove();