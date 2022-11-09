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

function ordenate() {
    tasks.sort(function (a, b) {
        if (a.tipo < b.tipo) {
            return -1
        }
        if (a.tipo > b.tipo) {
            return 1
        }
    })
}
ordenate()

const listTasks = document.querySelector('.tasks-list')

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
        buttonDelete.id = `delete-${i}`
        divLeft.appendChild(buttonDelete)
        const itenImg = document.createElement('img')
        itenImg.classList.add('remove')
        itenImg.id = `remove-${i}`
        itenImg.src = 'img/trash.png'
        itenImg.alt = 'Lixeira'
        buttonDelete.appendChild(itenImg)
    }
}

addItensToList(tasks)

const selectUrgency = document.querySelector('#urgency-of-tasks-id')
const addInList = document.querySelector('.add-task')
const inputTask = document.querySelector('#tasks-inserter-id')
let form = document.querySelector('.box-form')

let obj = {}
function recebeValores(inputTask, selectUrgency) {
    if (inputTask.tasks == '' || selectUrgency == 'Selecione Tipo') {
        alert('Campo Vazio')
        return false
    } else {
        obj = {
            titulo: inputTask.value,
            tipo: selectUrgency.value
        }
        tasks.push(obj)
        return obj
    }
}

addInList.addEventListener('click', function(e) {
    // recebeValores(inputTask, selectUrgency)
    let forAlert = recebeValores(inputTask, selectUrgency)
    if (forAlert.titulo == ''){
        alert('Campo Vazio')
    } else {
        ordenate()
        listTasks.innerHTML = ''
        addItensToList(tasks)
        e.stopPropagation()
    }
})

const search = document.querySelector("#searcher")
function recebeString(search) {
    console.log(search.value)
}
search.addEventListener("keypress", function(e){
    if (e.key === 'Enter') {
        console.log('estou on')
        // recebeString(search)
    }
})
// function searchTask(search, list) {
//     let searchRes = []
//     for (let i = 0; i < list.length; i++) {
//         if (search.value.toLowerCase() == list[i].titulo.toLowerCase()) {
//             console.log(list[i])
//             searchRes.push(list[i])
//         }
//     }
//     if (searchRes.length == 0) {
//         return alert('Tarefa não encontrada')
//     } else {
//         // console.log(searchRes)
//         return searchRes
//     }
// }

// search.addEventListener('keypress', function(e){
//     if (e.key === 'Enter') {
//         let aux = searchTask(search, tasks)
//         listTasks.innerHTML = ''
//         addItensToList(aux)
//         e.stopPropagation()
//     }
// })










