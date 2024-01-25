const $TodoForm = document.getElementById('TodoForm');
const $TodoInput = $TodoForm.querySelector('input');
const $TodoList = document.getElementById('TodoList');
const StorageList = 'SavedTodoList';
let SavedList = [];

function SaveTodoList () {
    localStorage.setItem(StorageList, JSON.stringify(SavedList));
};

function SaveTodo (TodoContents) {
    const TodoObject = {
        id: SavedList.length + 1,
        text: TodoContents,
    };

    SavedList.push(TodoObject);
    SaveTodoList();
};

function LoadTodo () {
    const LoadTodoList = localStorage.getItem(StorageList);

    if (LoadTodoList !== null) {
        const ParseTodoList = JSON.parse(LoadTodoList);

        for (let TodoContents of ParseTodoList) {
            const text = TodoContents.text;
            
            MakeTodo(text);
            SaveTodo(text);
        };
    };
};

function MakeTodo (TodoContents) {
    const NewTodo = document.createElement('li');
    const ListInput = document.createElement('input');
    const CheckBtn = document.createElement('i');
    const ModifyBtn = document.createElement('i');
    const DeleteBtn = document.createElement('i');

    NewTodo.id = SavedList.length + 1;

    ListInput.type = 'text';
    ListInput.disabled = true;
    ListInput.value = TodoContents;

    CheckBtn.className = 'checked-todo bx bx-checkbox bx-sm';
    CheckBtn.style.cursor = 'pointer';

    ModifyBtn.className = 'modify-todo bx bx-pencil bx-sm';
    ModifyBtn.style.cursor = 'pointer';

    DeleteBtn.className = 'delete-todo bx bx-trash bx-sm';
    DeleteBtn.style.cursor = 'pointer';

    TodoList.appendChild(NewTodo);
    NewTodo.appendChild(ListInput);
    NewTodo.appendChild(CheckBtn);
    NewTodo.appendChild(ModifyBtn);
    NewTodo.appendChild(DeleteBtn);
};

function AddTodo (event) {
    event.preventDefault();

    if (!$TodoInput.value) return;

    const TodoContents = $TodoInput.value;

    MakeTodo(TodoContents);
    SaveTodo(TodoContents);

    $TodoInput.value = '';
};

$TodoList.addEventListener ('click', (event) => {
    if (event.target.classList.contains('checked-todo')) {
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
        
        const Li = event.target.parentNode;
        
        SavedList = SavedList.filter((TodoContents) => TodoContents.id !== Number(Li.id));
        SaveTodoList();
    };
});

function Init () {
    LoadTodo();
    $TodoForm.addEventListener ('submit', AddTodo);
};

Init();