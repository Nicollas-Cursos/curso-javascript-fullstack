const fs = require('fs'),
      path = require('path'),
      caminho = path.join(__dirname, 'dados.txt')

const arquivo = new Promise((resolve, reject) => {
    resolve(fs.readFileSync(caminho, 'utf-8'))
    /*fs.readFile(caminho, (er, ctx) => {
        resolve(ctx.toString())
    })*/
})

arquivo
    .then(console.log)