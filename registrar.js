function create_id() {
    id = 1
    let id = localStorage.getItem('id') + 1
    localStorage.setItem('last_id',JSON.stringify(id))
    return id
}

function get_idade() {
    var idade = document.getElementsById("idade").value
    console.log(idade)
    if (idade > 0 && idade <= 100 && (!isNaN(idade))) {
        return idade
    }
    else alert("Idade inválida")
}

function get_nota() {
    var nota = document.getElementById("nota").value
    if ((nota >= 0 && nota <= 100 && (!isNaN(nota)))) {
        return nota
    }
    else alert("Nota inválida")
}

function registrar() {
    console.clear
    var nome = document.getElementsById(".nome").value
    var matricula = Math.floor(Math.random() * (100000 - 1 + 1) + 1)
    var idade = get_idade()
    var nota = get_nota()
    var id = create_id()
    student = [id,nome,matricula,idade,nota].join(";")
    console.log(student)
}