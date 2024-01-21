const TodoForm = document.getElementById('TodoForm');
const TodoInput = document.getElementById('TodoInput');
const TodoList = document.getElementById('TodoList');

function addTodo (event) {
    event.preventDefault();

    if (!TodoInput.value) return;

    const newTodo = document.createElement('li');
    const ListInput = document.createElement('input');
    const ModifyBtn = document.createElement('i');

    ListInput.type = 'text';
    ListInput.disabled = true;
    ListInput.value = TodoInput.value;

    ModifyBtn.className = 'bx bx-pencil bx-sm';
    ModifyBtn.style.cursor = 'pointer';

    TodoList.appendChild(newTodo);
    newTodo.appendChild(ListInput);
    newTodo.appendChild(ModifyBtn);

    TodoInput.value = '';
};

TodoForm.addEventListener('submit', addTodo);

TodoList.addEventListener('click', function(event) {
    if (event.target.classList.contains('bx')) {
		const ModifyTodo = event.target.previousElementSibling;

		ModifyTodo.disabled = !ModifyTodo.disabled;

		event.target.classList.toggle('bx-pencil');
		event.target.classList.toggle('bx-check');
    };
}); 

