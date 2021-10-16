const imageBox = document.querySelector('.slider')
const controls = document.querySelectorAll('li')
const description = document.querySelector('.mem-description')

const images  = ['./assets/mem1.jpg', './assets/mem2.jpg', './assets/mem3.jpg', './assets/mem4.jpg']


controls.forEach(control => {
    control.addEventListener('click', (event) => {
        changeImage(event.currentTarget.dataset.index)
    })
})

function changeImage(data) {
    imageBox.style.backgroundImage = `url(${images[data]})`
}
function changeDescription(data) {

}