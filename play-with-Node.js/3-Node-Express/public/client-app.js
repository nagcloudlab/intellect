console.log("-client-app.js-");

// using DOM
const topFiveTodosBtn = document.getElementById('top-5-todos-btn')
const todosListEle = document.getElementById('todos')

topFiveTodosBtn.addEventListener('click', async (e) => {
    // using XHR / Fetch
    const response = await fetch("/api/todos?limit=5") // IO
    const todos = await response.json();

    const listElements = todos.map(todo => {
        return `
            <li class="list-group-item">
               <div class="d-flex justify-content-between">
                <span>${todo.id}</span>
                <span>${todo.title}</span>
                <span>${todo.completed ? 'completed' : 'pending'}</span>
               </div>
            </li>
        `
    })
    todosListEle.innerHTML = listElements.join(" ")
})
