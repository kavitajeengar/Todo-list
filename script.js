
// function addTodo() {
//     const todoInput = document.getElementById('todo-input');
//     const dateInput = document.getElementById('date-input');
//     const todoList = document.getElementById('todo-list');

//     // Get the input values
//     const todoTitle = todoInput.value.trim();
//     const todoDate = dateInput.value;

//     // Check if input fields are not empty
//     if (!todoTitle || !todoDate) {
//         alert('Please enter both Todo task and date.');
//         return;
//     }

//     // Create a new todo item element
//     const todoItem = document.createElement('div');
//     todoItem.className = 'todo-item';
//     todoItem.innerHTML = `
//         <span>${todoTitle} - ${new Date(todoDate).toLocaleDateString()}</span>
//         <button onclick="markAsDone(this)">Mark As Done</button>
//         <button onclick="removeTodo(this)">Remove Todo</button>
//         <button onclick="editTodo(this)">Edit Todo</button>
//     `;

//     // Append the new todo item to the todo list
//     todoList.appendChild(todoItem);

//     // Clear the input fields
//     todoInput.value = '';
//     dateInput.value = '';
// }

// // Function to remove a todo item
// function removeTodo(button) {
//     const todoItem = button.parentElement;
//     todoItem.remove();
// }

// // Function to mark a todo item as done
// function markAsDone(button) {
//     const todoItem = button.parentElement;
//     todoItem.classList.toggle('completed');
// }

// function editTodo(button) {
//     const todoItem = button.parentElement;
//     const [todoText, todoDate] = todoItem.querySelector('span').innerText.split(' - ');

//     // Fill the input fields with existing data
//     document.getElementById('todo-input').value = todoText;
//     document.getElementById('date-input').value = new Date(todoDate).toISOString().split('T')[0];

//     // Remove the existing todo item
//     removeTodo(button);
// }




// document.querySelector('#add-btn').addEventListener('click', addTodo);

// function addTodo() {
//     const todoTitle = document.querySelector('#todo-input').value.trim();
//     const todoDate = document.querySelector('#date-input').value;
//     const todoList = document.querySelector('#todo-list');

//     if (!todoTitle || !todoDate) {
//         alert('Please enter both Todo task and date.');
//         return;
//     }

//     const todoItem = createTodoItem(todoTitle, todoDate);
//     todoList.appendChild(todoItem);

//     // Clear input fields
//     document.querySelector('#todo-input').value = '';
//     document.querySelector('#date-input').value = '';
// }

// function createTodoItem(title, date) {
//     const todoItem = document.createElement('div');
//     todoItem.className = 'todo-item';

//     // Create and append span
//     const span = document.createElement('span');
//     span.textContent = `${title} - ${formatDate(date)}`;
//     todoItem.appendChild(span);

//     // Create and append buttons
//     const editBtn = document.createElement('button');
//     editBtn.textContent = 'Edit';
//     editBtn.addEventListener('click', () => editTodoItem(todoItem, title, date));
//     todoItem.appendChild(editBtn);

//     const doneBtn = document.createElement('button');
//     doneBtn.textContent = 'Done';
//     doneBtn.addEventListener('click', () => markAsDone(todoItem));
//     todoItem.appendChild(doneBtn);

//     const removeBtn = document.createElement('button');
//     removeBtn.textContent = 'Remove';
//     removeBtn.addEventListener('click', () => removeTodoItem(todoItem));
//     todoItem.appendChild(removeBtn);

//     return todoItem;
// }

// function removeTodoItem(todoItem) {
//     todoItem.remove();
// }

// function markAsDone(todoItem) {
//     todoItem.classList.toggle('completed');
// }

// function editTodoItem(todoItem, originalText, originalDate) {
//     // Replace span with input fields
//     todoItem.innerHTML = `
//         <input type="text" value="${originalText}">
//         <input type="date" value="${new Date(originalDate).toISOString().split('T')[0]}">
//         <button class="save-btn">Save</button>
//         <button class="cancel-btn">Cancel</button>
//     `;

//     // Add event listeners to new buttons
//     todoItem.querySelector('.save-btn').addEventListener('click', () => saveEdit(todoItem));
//     todoItem.querySelector('.cancel-btn').addEventListener('click', () => cancelEdit(todoItem, originalText, originalDate));
// }

// function saveEdit(todoItem) {
//     const newText = todoItem.querySelector('input[type="text"]').value.trim();
//     const newDate = todoItem.querySelector('input[type="date"]').value;

//     if (!newText || !newDate) {
//         alert('Please enter both Todo task and date.');
//         return;
//     }

//     const span = document.createElement('span');
//     span.textContent = `${newText} - ${formatDate(newDate)}`;
//     todoItem.innerHTML = '';
//     todoItem.appendChild(span);

//     const editBtn = document.createElement('button');
//     editBtn.textContent = 'Edit';
//     editBtn.addEventListener('click', () => editTodoItem(todoItem, newText, newDate));
//     todoItem.appendChild(editBtn);

//     const doneBtn = document.createElement('button');
//     doneBtn.textContent = 'Done';
//     doneBtn.addEventListener('click', () => markAsDone(todoItem));
//     todoItem.appendChild(doneBtn);

//     const removeBtn = document.createElement('button');
//     removeBtn.textContent = 'Remove';
//     removeBtn.addEventListener('click', () => removeTodoItem(todoItem));
//     todoItem.appendChild(removeBtn);
// }

// function cancelEdit(todoItem, originalText, originalDate) {
//     const span = document.createElement('span');
//     span.textContent = `${originalText} - ${formatDate(originalDate)}`;
//     todoItem.innerHTML = '';
//     todoItem.appendChild(span);

//     const editBtn = document.createElement('button');
//     editBtn.textContent = 'Edit';
//     editBtn.addEventListener('click', () => editTodoItem(todoItem, originalText, originalDate));
//     todoItem.appendChild(editBtn);

//     const doneBtn = document.createElement('button');
//     doneBtn.textContent = 'Done';
//     doneBtn.addEventListener('click', () => markAsDone(todoItem));
//     todoItem.appendChild(doneBtn);

//     const removeBtn = document.createElement('button');
//     removeBtn.textContent = 'Remove';
//     removeBtn.addEventListener('click', () => removeTodoItem(todoItem));
//     todoItem.appendChild(removeBtn);
// }

// function formatDate(date) {
//     return new Date(date).toLocaleDateString();
// }




document.querySelector('#add-btn').addEventListener('click', addTodo);

function addTodo() {
    const todoTitle = document.querySelector('#todo-input').value.trim();
    const todoDate = document.querySelector('#date-input').value;

    if (!todoTitle || !todoDate) {
        alert('Please enter both Todo task and date.');
        return;
    }

    const todoItem = createTodoItem(todoTitle, todoDate);
    document.querySelector('#todo-list').appendChild(todoItem);

    // Clear input fields
    document.querySelector('#todo-input').value = '';
    document.querySelector('#date-input').value = '';
}

function createTodoItem(title, date) {
    const todoItem = document.createElement('div');
    todoItem.className = 'todo-item';

    const span = document.createElement('span');
    span.textContent = `${title} - ${formatDate(date)}`;
    todoItem.appendChild(span);

    addButton(todoItem, 'Edit', () => editTodoItem(todoItem, title, date));
    addButton(todoItem, 'Done', () => markAsDone(todoItem));
    addButton(todoItem, 'Remove', () => removeTodoItem(todoItem));

    return todoItem;
}

function addButton(parent, text, onClick) {
    const button = document.createElement('button');
    button.textContent = text;
    button.addEventListener('click', onClick);
    parent.appendChild(button);
}

function removeTodoItem(todoItem) {
    todoItem.remove();
}

function markAsDone(todoItem) {
    todoItem.classList.toggle('completed');
}

function editTodoItem(todoItem, originalText, originalDate) {
    // Clear the current content
    todoItem.innerHTML = '';

    // Create and append input fields
    const textInput = document.createElement('input');
    textInput.type = 'text';
    textInput.value = originalText;
    todoItem.appendChild(textInput);

    const dateInput = document.createElement('input');
    dateInput.type = 'date';
    dateInput.value = new Date(originalDate).toISOString().split('T')[0];
    todoItem.appendChild(dateInput);

    // Create and append save and cancel buttons
    addButton(todoItem, 'Save', () => saveEdit(todoItem));
    addButton(todoItem, 'Cancel', () => cancelEdit(todoItem, originalText, originalDate));
}

function saveEdit(todoItem) {
    const newText = todoItem.querySelector('input[type="text"]').value.trim();
    const newDate = todoItem.querySelector('input[type="date"]').value;

    if (!newText || !newDate) {
        alert('Please enter both Todo task and date.');
        return;
    }

    const span = document.createElement('span');
    span.textContent = `${newText} - ${formatDate(newDate)}`;
    todoItem.innerHTML = '';
    todoItem.appendChild(span);

    addButton(todoItem, 'Edit', () => editTodoItem(todoItem, newText, newDate));
    addButton(todoItem, 'Done', () => markAsDone(todoItem));
    addButton(todoItem, 'Remove', () => removeTodoItem(todoItem));
}

function cancelEdit(todoItem, originalText, originalDate) {
    const span = document.createElement('span');
    span.textContent = `${originalText} - ${formatDate(originalDate)}`;
    todoItem.innerHTML = '';
    todoItem.appendChild(span);

    addButton(todoItem, 'Edit', () => editTodoItem(todoItem, originalText, originalDate));
    addButton(todoItem, 'Done', () => markAsDone(todoItem));
    addButton(todoItem, 'Remove', () => removeTodoItem(todoItem));
}

function formatDate(date) {
    return new Date(date).toLocaleDateString();
}
