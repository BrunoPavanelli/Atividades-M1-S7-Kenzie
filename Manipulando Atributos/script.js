const users = [
    {
     name: 'Madalena',
     profile: 'Admin',
     sector: 'Administration'
   },
   {
     name: 'Rafael',
     profile: 'user',
     sector: 'Finance'
   },  
   {
     name: 'Baltazar',
     profile: 'user',
     sector: 'Reception'
   },  
   {
     name: 'Carmen',
     profile: 'Admin',
     sector: 'Business'
   }    
]

let main = document.querySelector('.box-main')

for (let i = 0; i < users.length; i++) {
    const div = document.createElement('div')
    div.classList.add('box-card')
    main.appendChild(div)

    const name = document.createElement('span')
    name.innerText = users[i].name
    div.appendChild(name)

    const profile = document.createElement('span')
    profile.innerText = users[i].profile
    div.appendChild(profile)

    const sector = document.createElement('span')
    sector.innerText = users[i].sector
    div.appendChild(sector)

    if (users[i].profile == 'user') {
        div.classList.add('card-color-user')
    } else if (users[i].profile == 'Admin' && users[i].sector == 'Administration') {
        div.classList.add('card-color-adminAdmin')
    } else {
        div.classList.add('card-color-admin')
    }
}