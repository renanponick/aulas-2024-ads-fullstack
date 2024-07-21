document.addEventListener('DOMContentLoaded', () => {
    const todoInput = document.getElementById('todo-input');
    const addButton = document.getElementById('add-button');
    const todoList = document.getElementById('todo-list');
  
    addButton.addEventListener('click', addTodo);
  
    todoInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        addTodo();
      }
    });
  
    function addTodo() {
      const todoText = todoInput.value.trim();
      if (todoText !== '') {
        const li = document.createElement('li');
        li.textContent = todoText;
  
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Deletar';
        deleteButton.className = 'delete';
        deleteButton.addEventListener('click', () => {
          todoList.removeChild(li);
        });
  
        li.appendChild(deleteButton);
        todoList.appendChild(li);
        todoInput.value = '';
        todoInput.focus();
      }
    }
  });
  