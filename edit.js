const input = require("readline-sync").question
const write = require("fs").writeFileSync
const { get_id, read_database, database_file } = require("./exports")
const { get_age, get_grade } = require("./register")

function edit() {
    console.clear()
    console.log(" == Editar Aluno ==")
    let lines = read_database()
    let id = get_id()
    if (id == 0) return 
    for (let i = 0; i < lines.length; i++) {
        var line = lines[i].split(";")
        if (line[0] === id) {
            let position = lines.indexOf(line.join(";"))
            line[1] = input(">- Digite o novo nome: ")
            line[3] = get_age()
            line[4] = get_grade()
            lines[position] = line.join(";")
            lines.unshift("id;nome;matricula;idade;nota\n")
            lines.unshift("sep=;")
            lines = lines.join("\n")
            write(database_file,lines,'utf-8')
            console.log("-> Aluno editado com sucesso.")
            break
        }
    }
}

exports.edit = edit