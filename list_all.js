const { read_database } = require("./exports")

function list_all() {
    let lines = read_database()
    for (let i = 0; i < lines.length; i++) {
        if (i === 0) console.clear()
        let line = lines[i].split(';')
        console.log(`- ID: ${line[0]}`)
        console.log(`- Nome: ${line[1]}`)
        console.log(`- Matricula: ${line[2]}`)
        console.log(`- Idade: ${line[3]}`)
        console.log(`- Nota: ${line[4]}`)
        console.log(" ")
    }
}

list_all()