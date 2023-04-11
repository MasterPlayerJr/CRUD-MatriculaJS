const { read_database} = require("./exports")
const input = require("readline-sync").question

function avarege() {
    console.clear()
    console.log(" == Media de Notas ==")
    let lines = read_database()
    let notas = []
    soma = 0
    for (let i = 0; i < lines.length; i++) {
        var line = lines[i].split(";")
        notas.push(line[line.length-1])
        soma += parseFloat(line[line.length-1])
    }
    let media = soma / notas.length
    console.log(`-> A media das notas é ${media}`)
    input()
}

exports.avarege = avarege