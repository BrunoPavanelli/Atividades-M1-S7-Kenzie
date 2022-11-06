let tasks = [
    //Nível de Urgência definido de 1 a 3, onde 1 é o nível mais urgente.
    {
      titulo: "Comprar comida para o gato",
      tipo: 1
    },
    {
      titulo: "Limpar o quarto",
      tipo: 1
    }, 
    {
      titulo: "Passear com o cachorro",
      tipo: 3
    },
    {
      titulo: "Consertar Computador",
      tipo: 2
    },  
    {
      titulo: "Guardar dinheiro do lanche",
      tipo: 1
    },  
    {
      titulo: "Beber água",
      tipo: 2
    }    
  ]

tasks.sort(function (a, b) {
    if (a.tipo < b.tipo) {
        return -1
    }
    if (a.tipo > b.tipo) {
        return 1
    }
})
console.log(tasks)

const listTasks = document.querySelector('.tasks-list')
console.log(listTasks)

function addItensToList (list) {
    // list.sort(comparaTipo(a, b))

    for (let i = 0; i < list.length; i++) {
        const iten = document.createElement('li')
        iten.classList.add('list-itens')
        listTasks.appendChild(iten)

        const divRight = document.createElement('div')
        divRight.classList.add('right')
        iten.appendChild(divRight)

        const colorType = document.createElement('p')
        if (list[i].tipo == 1) {
            colorType.classList.add('color-circle1')
        } else if (list[i].tipo == 2) {
            colorType.classList.add('color-circle2')
        } else if (list[i].tipo == 3) {
            colorType.classList.add('color-circle3')
        }
        divRight.appendChild(colorType)
        const text = document.createElement('p')
        text.classList.add('itens-text')
        text.innerText = list[i].titulo
        divRight.appendChild(text)

        const divLeft = document.createElement('div')
        divLeft.classList.add('left')
        iten.appendChild(divLeft)

        const buttonDelete = document.createElement('button')
        buttonDelete.classList.add('button-delete')
        divLeft.appendChild(buttonDelete)
        const itenImg = document.createElement('img')
        itenImg.src = 'img/trash.png'
        itenImg.alt = 'Lixeira'
        buttonDelete.appendChild(itenImg)
    }
}

addItensToList(tasks)