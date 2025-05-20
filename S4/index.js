const body = document.getElementById('body');
body.style.backgroundColor = 'red';
let nbClick = 0;


const btn =  document.createElement('button');
btn.innerText = 'Click moi';


const span = document.createElement('span');

body.appendChild(btn);
body.appendChild(span);

btn.addEventListener('mouseover', () => {
    nbClick++;
    span.innerText = `${nbClick} fois`;
})

btn.addEventListener('click', (e) => {
    e.preventDefault();
    const paragraph = document.getElementById('paragraph');
    console.log(paragraph.innerText);
})