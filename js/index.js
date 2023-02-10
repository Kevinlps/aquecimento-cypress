const container = document.getElementById('container')

const containerTitle = document.createElement('h2')
containerTitle.innerText = 'Bem vindo ao aquecimento da disciplina!'
containerTitle.className = 'title'
container.appendChild(containerTitle)

const instructions = document.createElement('p')
instructions.innerText= 'Clique em "Adicionar" para adicionar uma nova pessoa!'
instructions.className = 'text-content'
container.appendChild(instructions)

const addPersonButton = document.createElement('button')
addPersonButton.className = 'person-button'
addPersonButton.innerText = 'Adicionar'
addPersonButton.type = 'button'
container.appendChild(addPersonButton)

const clearButton = document.createElement('button')
clearButton.className = 'person-button'
clearButton.innerText = 'Limpar'
clearButton.type = 'button'
container.appendChild(clearButton)

const peopleList = document.createElement('ul')
peopleList.id = 'people-list'
container.appendChild(peopleList)

const addPerson = () => {
    const name = faker.name.findName()
    const personItem = document.createElement('li')
    personItem.className = 'text-content'
    personItem.innerText = name
    peopleList.appendChild(personItem)
}
addPersonButton.onclick =addPerson