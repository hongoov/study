const $TodoInput = document.getElementById('TodoInput');
const $TodoList = document.getElementById('TodoList');
let SavedList = [];

function addTodo (InputText) {
    const NewTodo = document.createElement('li');
    const ListInput = document.createElement('input');
    const CheckBtn = document.createElement('i');
    const ModifyBtn = document.createElement('i');
    const DeleteBtn = document.createElement('i');

    NewTodo.id = SavedList.length + 1;

    ListInput.type = 'text';
    ListInput.disabled = true;
    ListInput.value = InputText;

    CheckBtn.className = 'check-todo bx bx-checkbox bx-sm';
    ModifyBtn.className = 'modify-todo bx bx-pencil bx-sm';
    DeleteBtn.className = 'delete-todo bx bx-trash bx-sm';

    $TodoList.appendChild(NewTodo);
    NewTodo.append(ListInput, CheckBtn, ModifyBtn, DeleteBtn);
};

$TodoInput.addEventListener ('submit', (event) => {
    event.preventDefault();

    if (event.currentTarget.todo.value.trim() === '') return;

    const InputText = event.currentTarget.todo.value;

    addTodo(InputText);
    SaveTodo(InputText);

    event.currentTarget.todo.value = '';
});

$TodoList.addEventListener ('click', (event) => {
    if (event.target.classList.contains('check-todo')) {
        const CheckTodo = event.target;

        CheckTodo.classList.toggle('bx-checkbox');
        CheckTodo.classList.toggle('bx-checkbox-checked');
        CheckTodo.previousElementSibling.classList.toggle('checked');
    };

    if (event.target.classList.contains('modify-todo')) {
        const ModifyTodo = event.target.previousElementSibling.previousElementSibling;

        ModifyTodo.disabled = !ModifyTodo.disabled;

        event.target.classList.toggle('bx-pencil');
        event.target.classList.toggle('bx-check');
    };

    if (event.target.classList.contains('delete-todo')) {
        event.target.parentElement.remove();

        SavedList = SavedList.filter((Todo) => Todo.id !== parseInt(event.target.parentElement.id));

        SaveStorage();
    };
});

function SaveStorage () {
    localStorage.setItem('StorageList', JSON.stringify(SavedList));
};

function SaveTodo (InputText) {
    const TodoObj = {
        id: SavedList.length + 1,
        text: InputText
    };

    SavedList.push(TodoObj);

    SaveStorage();
};

function LoadTodo () {
    const LoadTodoList = localStorage.getItem('StorageList');

    if (LoadTodoList !== null) {
        const ParseStorage = JSON.parse(LoadTodoList);

        for (let InputText of ParseStorage) {
            const text = InputText.text;

            addTodo(text);
            SaveTodo(text);
        }
    };
};

LoadTodo();