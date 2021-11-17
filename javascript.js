/*Här skriver ni koden*/
// declaration of variables
const button = document.getElementById('my-button');
const list = document.getElementById('list');
const input = document.getElementById('task');

// declaration of click handlers
const handelAdd = () => {
    const liElement = document.createElement('li');
    const taskText = document.createElement('span');
    const deleteButton = document.createElement('button');
    const editButton = document.createElement('button');
    const checkbox = document.createElement('input');
    const text = document.createTextNode(input.value);

    checkbox.setAttribute('type', 'checkbox');

    editButton.innerHTML = "edit";
    const handelEdit = () => {

        taskText.contentEditable = true;
        taskText.style.backgroundColor = "#dddbdb";

    }

    editButton.addEventListener("click", handelEdit);

    const saveEdit = (e) => {
        if(e.key === 'Enter') {
        taskText.contentEditable = false;
        taskText.style.backgroundColor = null;
        }
        
    }

    taskText.addEventListener("keypress", saveEdit);

    const handelCheckbox = () => {
          
        liElement.classList.toggle('style-task');

    }
    checkbox.addEventListener("click", handelCheckbox);

    deleteButton.innerHTML = "delete";
    const handelDelete = () => {
        liElement.remove();
        
        // alternative
        // list.removeChild(liElement);
    }
    deleteButton.addEventListener("click", handelDelete);
    if (input.value == "") {
        alert('Write something here');
    } else {
        taskText.appendChild(text);
        liElement.appendChild(taskText);
        liElement.appendChild(checkbox);
        liElement.appendChild(deleteButton);
        liElement.appendChild(editButton);
        input.value = "";
        list.appendChild(liElement);
    }
}

// click event binding
button.addEventListener("click", handelAdd);







