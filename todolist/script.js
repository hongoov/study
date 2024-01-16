const inputBox = document.getElementById('inputField');
const addToDo = document.getElementById('addToDo');
const toDoList = document.getElementById('toDoList');

addToDo.addEventListener('click', function(){
    const taskList = document.createElement('div');
    const list = document.createElement('p');
    const checkBox = document.createElement('input');
    const closeBtn = document.createElement('button');

    if (!inputBox.value)
        alert("할 일을 입력해주세요.");
    else {
        toDoList.appendChild(taskList);

        taskList.appendChild(checkBox);
        checkBox.type = "checkbox"
        
        taskList.appendChild(list);
        list.innerText = inputBox.value;

        taskList.appendChild(closeBtn);
        
        inputBox.value= "";
    };

    checkBox.addEventListener('click', function () {
        list.style.textDecoration = "line-through";
    });

    closeBtn.addEventListener('click', function () {
        toDoList.removeChild(taskList);
    });
});