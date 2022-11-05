// // Kata 1
// let container = document.getElementById('root')
// console.log(container)

// // Kata 2
// const container = document.getElementById('root')
// container.innerText = 'repetir'
// console.log(container)

// // Kata 3
// const container = document.getElementById('root')
// container.innerText = 'repetir mais'
// console.log(container)

// // Kata 4
// const repetir = document.createElement('span')
// console.log(repetir)

// // Kata 5
// const repetir2 = document.createElemen('span')
// repetir2.innerText = 'preciso repetir'
// console.log(repetir2)

// // Kata 6
// const repetir3 = document.createElement('span')
// let container = document.getElementById('root')
// repetir3.innerText = 'repetir e repetir...'
// container.appendChild(repetir3)

// Kata 7
const list = document.createElement('ul')
const listElement = document.createElement('li')
listElement.innerText = 'repetir cada vez mais'
list.appendChild(listElement)
const container = document.querySelector('#root')
container.appendChild(list)

