let trigger = document.getElementById('trigger');
let target = document.getElementById('target');

trigger.addEventListener('mouseover', (event) => {
    target.src = "img/picB.jpg";
})

trigger.addEventListener('mouseout', (event) => {
    target.src = "img/picA.jpg";
})