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
    for (let i = 0; i < list.length; i++) {
        const iten = document.createElement('li')
        iten.classList.add('list-itens')
        iten.id = `list-${i}`
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

        buttonDelete.addEventListener('click', (e) => {
            e.preventDefault()

            const find = tasks.find( (element) => {
                if (element.titulo === list[i].titulo) {
                    list.splice(i,1)
                    return(list)
                }                  
            })            
            listTasks.innerHTML = ''
            addItensToList(tasks)
        })
        
        divLeft.appendChild(buttonDelete)
    }
}

addItensToList(tasks)

const selectUrgency = document.querySelector('#urgency-of-tasks-id')
const addInList = document.querySelector('.add-task')
const inputTask = document.querySelector('#tasks-inserter-id')
let form = document.querySelector('.box-form')

let obj = {}
function recebeValores(inputTask, selectUrgency) {
    if (inputTask.value == '' || selectUrgency.value == 'Selecione Tipo') {
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
    // e.preventDefault()
    let forAlert = recebeValores(inputTask, selectUrgency)
    if (forAlert.titulo == ''){
        alert('Campo Vazio')
    } else {
        ordenate()
        listTasks.innerHTML = ''
        addItensToList(tasks)
    }
})

const search = document.getElementById("searcher")
const buttonSearch = document.querySelector('#botao-search')

function recebeString(search) {
    let aux
    let newTasks = []
    let value = search.value.toLowerCase()
    for (let i = 0; i < tasks.length; i++) {
        tasksValue = tasks[i].titulo.toLowerCase() 
        if (value == tasksValue) {
            aux = tasks[i]
            listTasks.innerHTML = '' 
            newTasks.push(aux)
            return newTasks
        } else {
            aux = {titulo: 'Nenhuma tarefa encontrada'}
            listTasks.innerHTML = '' 
        }
    }
    newTasks.push(aux)
    console.log(newTasks)
    return newTasks
}

buttonSearch.addEventListener("click", function(e){
    e.preventDefault()
    let aux = recebeString(search)
    addItensToList(aux)   
})















