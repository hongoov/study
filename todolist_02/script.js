const TodoForm = document.getElementById('TodoForm');
const TodoInput = document.getElementById('TodoInput');
const TodoList = document.getElementById('TodoList');

function addTodo (event) {
    event.preventDefault();

    if (TodoInput.value == '') return

    const newTodo = document.createElement('li');
    newTodo.textContent = TodoInput.value;
    TodoList.appendChild(newTodo);
    TodoInput.value = '';
};

TodoForm.addEventListener('submit', addTodo);