function create_id() {
    let id = parseInt(localStorage.getItem('last_id')) + 1;
    if (!isNaN(id)) {
        localStorage.setItem('last_id', id);
        return id;
    } else {
        localStorage.setItem('last_id', 0);
        return 0;
    }
}

function get_idade() {
    var idade = document.getElementById("idade").value
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
    var nome = document.getElementById("nome").value
    var matricula = Math.floor(Math.random() * (100000 - 1 + 1) + 1)
    var idade = get_idade()
    var nota = get_nota()
    var id = create_id()
    student = [nome,matricula,idade,nota].join(";")
    localStorage.setItem(id,JSON.stringify(student))
    console.log(student)
}