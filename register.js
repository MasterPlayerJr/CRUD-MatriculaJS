const { database_file } = require("./exports")
const { id_file } = require("./exports")

write = require("fs").writeFileSync
append = require("fs").appendFileSync
read = require("fs").readFileSync
input = require("readline-sync").question

exports.get_age = get_age
exports.get_grade = get_grade

function create_id() {
    let id = parseInt(read(id_file)) + 1
    write(id_file, id.toString())
    return id
}

function get_age() {
    age = parseInt(input(">- Idade do aluno:"))
    while (true) {
        if (age > 0 && age <= 100 && (!isNaN(age))) {
            return age
        }
        else age = input("Idade invalida! Digite novamente:")
    }
}

function get_grade() {
    let grade = input(">- Nota do aluno(0-100):")
    while (true) {
        if (grade >= 0 && grade <= 100 && (!isNaN(grade))) {
            return grade
        }
        else grade = input("Nota Invalida! Digite novamente:")
    }
}

function register() {
    console.clear()
    console.log(" == Criar Aluno == ")
    let name = input(">- Escreva o nome do aluno:")
    let register = Math.floor(Math.random() * (100000 - 1 + 1) + 1)
    let age = get_age()
    let grade = get_grade()
    let id = create_id()
    student = [id,name,register,age,grade].join(";")
    append(database_file, '\n' + student)
}