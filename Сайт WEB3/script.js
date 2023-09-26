const inputEL = document.getElementById('input')
const btnEL = document.querySelector('.todo-list__btn')
const fieldEL = document.querySelector('.todo-list__field')

function onBtnClick() {
    if (inputEL.value.length) {

        const divEL = document.createElement('div')
        divEL.classList.add('todo-list__item')

        const checkbox = document.createElement('input')
        checkbox.type = 'checkbox'

        const text = document.createElement('p')
        text.classList.add('todo-list__item-text')
        text.innerText = inputEL.value

        const img = document.createElement('img')
        img.src = '/image/Vector.svg'

        divEL.appendChild(checkbox)
        divEL.appendChild(text)
        divEL.appendChild(img)

        fieldEL.appendChild(divEL)
        inputEL.value = ''
    }

}
btnEL.addEventListener('click', onBtnClick)