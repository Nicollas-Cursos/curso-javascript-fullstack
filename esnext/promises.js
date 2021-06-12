function falarDepoisDe(segundos, frase) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(frase)
        }, segundos * 1000)
    })
}

falarDepoisDe(3, 'Que legal!')
    .then((frase, abc) => frase.concat('?!?'))
    .then(outraFrase => console.log(outraFrase))
    .catch(error => console.log(error))