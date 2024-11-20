// Select Elements
const todoInput = document.getElementById('todo-input');
const addTodoButton = document.getElementById('add-todo');
const todoList = document.getElementById('todo-list');

// Load saved todos from local storage
let todos = JSON.parse(localStorage.getItem('todos')) || [];

// Function to render the todo list
function renderTodos() {
    todoList.innerHTML = ''; // Clear the list
    todos.forEach((todo, index) => {
        const li = document.createElement('li');
        li.textContent = todo;

        // Add a delete button to each to-do
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'X';
        deleteButton.addEventListener('click', () => {
            deleteTodo(index);
        });

        li.appendChild(deleteButton);
        todoList.appendChild(li);
    });
}

// Function to add a new todo
function addTodo() {
    const todoText = todoInput.value.trim();
    if (todoText) {
        todos.push(todoText); // Add to the array
        localStorage.setItem('todos', JSON.stringify(todos)); // Save to local storage
        renderTodos(); // Re-render the list
        todoInput.value = ''; // Clear the input field
    }
}

// Function to delete a todo
function deleteTodo(index) {
    todos.splice(index, 1); // Remove the item from the array
    localStorage.setItem('todos', JSON.stringify(todos)); // Save updated list
    renderTodos(); // Re-render the list
}

// Event Listener for Add Button
addTodoButton.addEventListener('click', addTodo);

// Event Listener for Enter Key
todoInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        addTodo();
    }
});

// Initial Render
renderTodos();
