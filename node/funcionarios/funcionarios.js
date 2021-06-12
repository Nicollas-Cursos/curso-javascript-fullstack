const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const menorSalario = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual
}

axios.get(url).then(response => {
    const funcionarios = response.data
    const funcionariosMulher = funcionarios.filter((a, e) => 
            a.genero === 'F' && 
            a.pais === 'China'
    ).reduce(menorSalario)
    console.log(funcionariosMulher)
})