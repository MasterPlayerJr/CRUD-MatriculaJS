const { read_database, get_id, database_file} = require("./exports")
const write = require("fs").writeFileSync

function remove() {
    console.clear()
    console.log(" == Deletar Aluno ==")
    let lines = read_database()
    let id = get_id()

    for (let i = 0; i < lines.length; i++) {
        var line = lines[i].split(";")
        if (line[0] === id) {
            let position = lines.indexOf(line.join(";"))
            lines.splice(position,1)
            lines.unshift("id;nome;matricula;idade;nota\n")
            lines.unshift("sep=;")
            lines = lines.join("\n")
            write(database_file,lines,'utf-8')
            console.log("-> Aluno removido com sucesso.")
            break
        }
    }
}

exports.remove = remove