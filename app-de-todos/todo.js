
var listElement = document.querySelector("#app ul");
var inputElement = document.querySelector("#app input");
var buttonElement = document.querySelector("#app button");

var todos = JSON.parse(localStorage.getItem('list_todos')) || [''];

function renderTodos() {
    listElement.innerHTML = '';
    inputElement.value = '';
    for (todo of todos) {

        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);

        //criando o link para remover
        var linkElement = document.createElement('a');
        linkElement.setAttribute('href', '#');
        var pos = todos.indexOf(todo);
        linkElement.setAttribute('onclick', 'removeTodo(' + pos + ')');
        var linkText = document.createTextNode(' - Excluir');
        linkElement.appendChild(linkText);

        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);
        listElement.appendChild(todoElement);

    }
}

renderTodos();

function addTodo() {
    var todoText = inputElement.value;
    todos.push(todoText);
    renderTodos();
    saveToStorage();
}

buttonElement.onclick = addTodo;


// splice - remove uma quantidade de itens do array com base na posição que for informada.
function removeTodo(pos) {
    todos.splice(pos, 1);
    renderTodos();
    saveToStorage();
}

function saveToStorage() {
    localStorage.setItem('list_todos', JSON.stringify(todos));

}