// Step 1: Select the form, input field, and the list
const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

// Step 2: Add a submit event listener to the form
todoForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent page reload

    // Step 3: Get the input value
    const taskText = todoInput.value.trim();

    // Check if input is not empty
    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    // Step 4: Create a new list item (li) for the task
    const listItem = document.createElement('li');

    // Step 5: Add text and buttons to the list item
    listItem.innerHTML = `
        <span>${taskText}</span>
        <div>
            <button class="complete-btn">✔</button>
            <button class="delete-btn">✖</button>
        </div>
    `;

    // Add the new task to the list
    todoList.appendChild(listItem);

    // Clear the input field
    todoInput.value = '';

    // Step 6: Add functionality to complete and delete buttons
    const completeButton = listItem.querySelector('.complete-btn');
    const deleteButton = listItem.querySelector('.delete-btn');

    // Mark task as completed
    completeButton.addEventListener('click', function () {
        listItem.querySelector('span').classList.toggle('completed');
    });

    // Delete the task
    deleteButton.addEventListener('click', function () {
        todoList.removeChild(listItem);
    });
});
