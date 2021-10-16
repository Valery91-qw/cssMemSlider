const imageBox = document.querySelector('.slider')
const controls = document.querySelectorAll('li')
const description = document.querySelector('.mem-description')

const images  = ['./assets/mem1.jpg', './assets/mem2.jpg', './assets/mem3.jpg', './assets/mem4.jpg']
const descriptionText = [
    'Когда же завезут ??',
    'Надо кормить !!!',
    'Куриное филе ?',
    'Do you know what I meme ?'
]

controls.forEach(control => {
    control.addEventListener('click', (event) => {
        let position = event.currentTarget.dataset.index
        changeImage(position)
        changeDescription(position)
    })
})

function changeImage(position) {
    imageBox.style.backgroundImage = `url(${images[position]})`
}
function changeDescription(position) {
    description.textContent = descriptionText[position]
}