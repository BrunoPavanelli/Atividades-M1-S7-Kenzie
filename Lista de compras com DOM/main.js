const main = document.querySelector('main')
console.log(main)
const shoppingList = document.querySelector('#list')
console.log(shoppingList)
const input = document.querySelector('#input')
console.log(input)
const addButton = document.getElementById('add')
console.log(addButton)
const resetButton = document.querySelector('#reset')
console.log(resetButton)

let list = []

function reloadList() {
    shoppingList.innerHTML = ""
    for (let i = 0; i < list.length; i++) {
        let currentElement = list[i]
        currentElement.id = i
        shoppingList.appendChild(currentElement)
    }
}

function createRemoveButton() {
    const removeButton = document.createElement('button')
    removeButton.innerText = 'Remove'
    removeButton.addEventListener('click', (e) => {
        list = list.filter((_, i) => i !== Number(e.composedPath[1].id))
        reloadList()
    })
    return removeButton
}

function onClickFunction() {
    let newItem = document.createElement('li')
    let paragraph = document.createElement('p')
    let removeButton = createRemoveButton()

    if (input.value) {
        paragraph.innerText = input.value

        newItem.appendChild(paragraph)
        newItem.appendChild(removeButton)

        input.value = ''

        list.push(newItem)

        reloadList()
    }
}
addButton.addEventListener('click', onClickFunction)

function onCLickResetFunction() {
    shoppingList.innerHTML = ''
    list = []
}
resetButton.addEventListener('click', onCLickResetFunction)

