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
// 연산자 
// 객체 무엇인지
// 이벤트 위임이 뭔지 왜 필요한지 이거 안쓰면 뭐가 안좋은건지?

		event.target.classList.toggle('bx-pencil');
		event.target.classList.toggle('bx-check');
    };
}); 

