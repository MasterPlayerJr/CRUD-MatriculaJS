const database = require("./exports").database_file
const read = require("fs").readFileSync

var linhas = read(database,'utf-8').split("\n")
linhas.splice(0,3)
var linha = linhas[1].split(";")
console.log(linhas)
console.log(linha)