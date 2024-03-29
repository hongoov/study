const TodoForm = document.getElementById('TodoForm');
const TodoInput = document.getElementById('TodoInput');
const SubmitBtn = document.getElementById('SubmitBtn');

function addTodo (event) {
    event.preventDefault();

    if (!TodoInput.value) return;

    const newTodo = document.createElement('li');
    const ListInput = document.createElement('input');
    const ModifyBtn = document.createElement('i');
    const DeleteBtn = document.createElement('i');

    ListInput.type = 'text';
    ListInput.disabled = true;
    ListInput.value = TodoInput.value;

    ModifyBtn.className = 'modify-todo bx bx-pencil bx-sm';
    ModifyBtn.style.cursor = 'pointer';

    DeleteBtn.className = 'bx bx-trash bx-sm'
    DeleteBtn.style.cursor = 'pointer';

    TodoList.appendChild(newTodo);
    newTodo.appendChild(ListInput);
    newTodo.appendChild(ModifyBtn);
    newTodo.appendChild(DeleteBtn);

    TodoInput.value = '';

    DeleteBtn.addEventListener('click', function () {
        TodoList.removeChild(newTodo);
    });
};

TodoForm.addEventListener('submit', addTodo);

TodoList.addEventListener('click', function (event) {
    if (event.target.classList.contains('modify-todo')) {
        const ModifyTodo = event.target.previousElementSibling;

        ModifyTodo.disabled = !ModifyTodo.disabled;

        event.target.classList.toggle('bx-pencil');
        event.target.classList.toggle('bx-check');
    };
});