/*Här skriver ni koden*/

const button = document.getElementById('my-button');
const list = document.getElementById('list');
const input = document.getElementById('task');

button.addEventListener("click", function(){
    const liElement = document.createElement('li');
    if(input.value == ""){
        alert('Write something here');
    } else {
        liElement.innerHTML = input.value;
        input.value = "";
        list.appendChild(liElement);
    }
});







