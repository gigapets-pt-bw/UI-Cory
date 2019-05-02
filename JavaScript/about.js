const info = document.querySelectorAll('.info');

const images = document.querySelectorAll('.info img');

images.forEach(element => {
    element.addEventListener('dblclick', () => toggle());
})

function toggle() {
    info.forEach(element => element.classList.toggle('reverse'));
}