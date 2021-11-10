/*Här skriver ni koden*/
// declaration of variables
const button = document.getElementById('my-button');
const list = document.getElementById('list');
const input = document.getElementById('task');

// declaration of click handlers
const handelAdd = () => {
    const liElement = document.createElement('li');
    const deleteButton = document.createElement('button');
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
        liElement.innerHTML = input.value;
        liElement.appendChild(deleteButton);
        input.value = "";
        list.appendChild(liElement);
    }
}

// click event binding
button.addEventListener("click", handelAdd);







