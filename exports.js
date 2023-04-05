const database_file = "database.csv"
const id_file = "last_id.txt"
const read = require("fs").readFileSync
const input = require("readline-sync").question

function read_database() {
    var lines = read(database_file,'utf-8').split("\n")
    lines.splice(0,3)
    return lines
}

function get_id() {
    let lines = read_database()
    let id = input("-> Escreva o id do alunho: ")
    let found = false
    while (true) {
        for (let i = 0; i < lines.length; i++) {
            let line = lines[i].split(";")
            if (line[0] == id) {
                found = true
            }
        }
        if (found) {
            return id
        }
        else id = input("-> Id invalido, Digite outro:")
    }
}

exports.database_file = database_file
exports.id_file = id_file
exports.read_database = read_database
exports.get_id = get_id