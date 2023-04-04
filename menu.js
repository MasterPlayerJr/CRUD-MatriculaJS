const input = require("readline-sync").question

function menu() {
    while (true) {
        console.clear()
        console.log(" == Matricula == ")
        console.log("1 - Cadastro de Aluno")
        console.log("2 - Listar Todos os Alunos")
        console.log("3 - Listar Aluno em Especifico")
        console.log("4 - Atualizar Aluno")
        console.log("5 - Excluir Aluno")
        console.log("6 - Media do Aluno")
        console.log("0 - Sair")
        process.stdout.write("Escolha uma opção:"); let choice = input()

        if (!isNaN(choice)) {
            if (choice >= 0 && choice <= 6){
                return choice
                break
            }
        }
    }
}

console.log(menu())