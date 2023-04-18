const b_register = document.querySelector(".cadastro");
const b_list_all = document.querySelector(".listar_todos");
const b_list_id = document.querySelector(".listar_id");
const b_edit = document.querySelector(".editar");
const b_remove = document.querySelector(".excluir");
const b_avarage = document.querySelector(".media");

function cadastro() {
    window.location.href = "register.html"
}

function listar_todos() {
    window.location.href = "list_all.html"
}

function listar_id() {
    window.location.href = "list_id.html"
}

function editar() {
    window.location.href = "edit.html"
}

function remove() {
    window.location.href = "delete.html"
}

function avarage() {
    window.location.href = "avarage.html"
}

b_register.addEventListener('click', cadastro)
b_list_all.addEventListener('click', listar_todos)
b_list_id.addEventListener('click', listar_id)
b_edit.addEventListener('click', editar)
b_remove.addEventListener('click', remove)
b_avarage.addEventListener('click', avarage)