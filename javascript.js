/*Här skriver ni koden*/

// declaration of variables
const button = document.getElementById('my-button');
const list = document.getElementById('list');
const input = document.getElementById('task');

// declaration of click handlers
const handelAdd = () => {
    const liElement = document.createElement('li');
    liElement.classList.add('li-element');
    const taskText = document.createElement('span');
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-button');
    const editButton = document.createElement('button');
    editButton.classList.add('edit-button');
    const checkbox = document.createElement('input');
    const text = document.createTextNode(input.value);

    checkbox.setAttribute('type', 'checkbox');

    editButton.innerHTML = "edit";
    const handelEdit = () => {
        taskText.contentEditable = true;
        taskText.style.backgroundColor = "#dddbdb";
    }
    const saveEdit = (e) => {
        if(e.key === 'Enter') {
            taskText.contentEditable = false;
            taskText.style.backgroundColor = null;
        }
    }
    const handelCheck = () => {
        taskText.classList.toggle('style-task');
    }
    const handelDelete = () => {
        liElement.remove();
    }

    deleteButton.innerHTML = "delete";

    taskText.addEventListener("keypress", saveEdit);
    checkbox.addEventListener("click", handelCheck);
    deleteButton.addEventListener("click", handelDelete);
    editButton.addEventListener("click", handelEdit);

    if (input.value == "") {
        alert('Write something here');
    } else {
        liElement.appendChild(checkbox);
        taskText.appendChild(text);
        liElement.appendChild(taskText);
        liElement.appendChild(deleteButton);
        liElement.appendChild(editButton);
        input.value = "";
        list.appendChild(liElement);
    }
}

button.addEventListener("click", handelAdd);
input.addEventListener("keyup", (event) => {
    if(event.key === 'Enter') {
        handelAdd()
    }
});







