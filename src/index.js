const imageBox = document.querySelector('.slider')
const controls = document.querySelectorAll('li')

controls.forEach(control => {
    control.addEventListener('click', (event) => {
        console.log(event.currentTarget.dataset.index)
    })
})