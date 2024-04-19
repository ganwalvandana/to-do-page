const newItem = document.getElementById("inputItem");
const item = document.getElementById("taskList");
const addItem = document.getElementById("addItem");











addItem.addEventListener('click', () => {
    if(newItem.value != "" ) {
        const task = newItem.value;
        const listTask = document.createElement("li");
        listTask.innerHTML = `
            ${task} 
            <button class="clearItem"> Clear </button>
            `;
        item.appendChild(listTask);
        
        newItem.value = "";
    }
})



item.addEventListener("click", (e) => {
    if(e.target.classList.contains("clearItem")) {
        const listItem = e.target.parentElement;
        item.removeChild(listItem);
    }
})










