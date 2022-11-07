document.addEventListener('click', (event) => {
    const lamp = document.querySelector('#box-lamp')
    const id = event.target.id

    if (id == lamp.id) {
        lamp.classList.contains('off') ? lamp.classList.toggle('on') : lamp.classList.toggle('off')
    }
})