// Objects

// Qual o erro nesse código?

const fruit = {
    name: 'Banana',
    color: 'Yellow'
}
// fruit = 'Manga'

// 1 - Por ser um objeto, a variável fruta não pode receber uma string
// 2 - Retornará erro pois para nomear a fruta, deve-se fazer fruit.name = 'Manga' 
// 3 - Está sendo atribuída uma string à um objeto
// 4 - Está sendo atribuído um novo valor para uma constante

// Na execução do seguinte código, é impresso no console o seguinte:
// { name: 'Arrow Function 1' }
// Por que o this possui a chave name com valor Arrow Function 1 se a
// função FirstFunction é invocada depois da FirstArrowFunction

// 1 Pois a FirstFunction possui um construtor new 
// 2 Pois a FirstArrowFunction tem prioridade no this
// 3 Pois a FirstFunction é uma função e possui seu próprio contexto do this
// 4 Pois o contexto da FirstArrowFunction é global

const FirstArrowFunction = () => {
    this.name = 'Arrow Function 1'
}

function FirstFunction () {
    const SecondArrowFunction = () => {
        this.name = 'Arrow Function 2 '
    }
    SecondArrowFunction()
    this.name = 'Function 2'
}

FirstArrowFunction()
new FirstFunction()

// console.log(this)

// Arrays

// Qual o melhor método para encontrar e remover o usuário Alex do vetor de usuários, salvando o novo vetor sem o Alex?

const users = [ { name: 'Ricardo', height: 197 }, { name: 'Alex', height: 150 }, { name: 'Henrique', height: 183 }]

const userToRemoveIndex =  users.findIndex(user => user.name === 'Alex')

const slicedUsers = users.slice(userToRemoveIndex, userToRemoveIndex + 1)
const splicedUsers = users.splice(userToRemoveIndex, 1)
const reducedUsers = users.reduce((acc, current) => {
    if (current.name !== 'Alex')  {
        acc.push(current)
    }
    return acc
}, [])
const filteredUsers = users.filter(user => user.name !== 'Alex')