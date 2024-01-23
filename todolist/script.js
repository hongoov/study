const TodoForm = document.getElementById('TodoForm');
const TodoInput = document.getElementById('TodoInput');
const SubmitBtn = document.getElementById('SubmitBtn');
const TodoList = document.getElementById('TodoList');

function addTodo (event) {
    event.preventDefault();

    if (!TodoInput.value) return;

    const newTodo = document.createElement('li');
    const ListInput = document.createElement('input');
    const CheckBtn = document.createElement('i');
    const ModifyBtn = document.createElement('i');
    const DeleteBtn = document.createElement('i');

    ListInput.className = 'ListInput';
    ListInput.type = 'text';
    ListInput.disabled = true;
    ListInput.value = TodoInput.value;

    CheckBtn.className = 'checked-todo bx bx-checkbox bx-sm';

    ModifyBtn.className = 'modify-todo bx bx-pencil bx-sm';
    ModifyBtn.style.cursor = 'pointer';

    DeleteBtn.className = 'delete-todo bx bx-trash bx-sm'
    DeleteBtn.style.cursor = 'pointer';

    TodoList.appendChild(newTodo);
    newTodo.appendChild(CheckBtn);
    newTodo.appendChild(ListInput);
    newTodo.appendChild(ModifyBtn);
    newTodo.appendChild(DeleteBtn);

    TodoInput.value = '';
};

TodoForm.addEventListener('submit', addTodo);

TodoList.addEventListener('click', function (event) {
    if (event.target.classList.contains('modify-todo')) {
        const ModifyTodo = event.target.previousElementSibling;

        ModifyTodo.disabled = !ModifyTodo.disabled;

        event.target.classList.toggle('bx-pencil');
        event.target.classList.toggle('bx-check');
    };

    if (event.target.classList.contains('delete-todo')) {
        event.target.parentElement.remove();
    };

    if (event.target.classList.contains('checked-todo')) {
        const CheckTodo = event.target;
    
        CheckTodo.classList.toggle('bx-checkbox');
        CheckTodo.classList.toggle('bx-checkbox-checked');
        CheckTodo.nextElementSibling.classList.toggle('checked');
    };
});