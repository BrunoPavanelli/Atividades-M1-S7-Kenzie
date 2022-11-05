let produto = {
    nome: 'Notebook',
    valor: 3000.00,
    liquidacao: true,
    distribuidor: 'lojadakenzie.com.br'
  }

let body = document.querySelector('body')

let card = document.createElement('div')
card.classList.add('card')
body.appendChild(card)

card.insertAdjacentHTML("afterbegin", `
  <h1 class = 'title'>${produto.nome}</h1>
  <span class = 'price'>R$ ${produto.valor.toString()},00</span>
  <span class = 'info'>Em liquidação</span>
  <span class = 'info-descount'></span>
  <span class = 'end'>Fabrincante: ${produto.distribuidor}</span>
`)

card.addEventListener('click', function(event){
    let auxClass = event.target.className
    let descount = document.querySelector('.info-descount')
    if (auxClass == 'info') {
        if (descount.innerText === '') {
            descount.innerText = `Hoje apenas: R$ ${produto.valor - (produto.valor * 0.3)},00`
        } else {
            descount.innerText = ''
        }
    }
})




