function gerarNumerosEntre(min, max, tempo) {
    if(min > max) [max, min] = [min, max]

    return new Promise(resolve => {
        setTimeout(() => {
            const fator = max - min + 1
            const aleatorio = parseInt(Math.random() * fator) + min
            resolve(aleatorio)
        }, tempo)
    })
}

function gerarVariosNumeros() {
    return Promise.all([
        gerarNumerosEntre(10, 20, 4000),
        gerarNumerosEntre(10, 20, 1000),
        gerarNumerosEntre(10, 20, 500),
        gerarNumerosEntre(10, 20, 3000),
        gerarNumerosEntre(10, 20, 100),
        gerarNumerosEntre(10, 20, 1500)
    ])
}
console.time('promise')
gerarVariosNumeros()
    .then(console.log)
    .then(() => {
        console.timeLog('promise')
        console.timeEnd('promise')
    })