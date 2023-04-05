const { read_database } = require("./exports")
const { get_id } = require("./exports")

function list_id() {
    console.clear()
    let lines = read_database()
    let id = get_id()
    
    for (let i = 0; i < lines.length; i++) {
        var line = lines[i].split(";")
        if (line[0] === id) {
            console.log(`- ID: ${line[0]}`)
            console.log(`- Nome: ${line[1]}`)
            console.log(`- Matricula: ${line[2]}`)
            console.log(`- Idade: ${line[3]}`)
            console.log(`- Nota: ${line[4]}`)
        }
    }
}

list_id()