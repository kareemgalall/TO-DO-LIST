function addItem(event) {
    event.preventDefault();
    let text = document.querySelector("#toDoInput");
    createNewTodoItem(text.value);
    const box = document.querySelector('input[type="text"]');
    box.value = '';
}
let cnt = 0;

function createNewTodoItem(text) {
    const li = document.createElement('li');
    li.classList.add('todo-item');
    li.innerHTML = `
  
    <div class="check">
                <div class="check-mark">
                    <input type="checkbox" name="checkbox" id="check" onchange="clickme(event)"/>
                    <div class="icon">
                        <img src="assets/icon-check.svg" alt="" />
                    </div>
                </div>
            </div>
        <div class="todo-text">${text}</div>
    `;
    if (document.querySelector('.items-status input[type="radio"]:checked').id === 'completed') {
        elem.classList.add('hidden');
    }
    const todoItems = document.querySelector('.todo-items');
    todoItems.appendChild(li);
    cnt++;
    updateItemsLeft(cnt);
}

const theme = document.getElementById('theme');
theme.setAttribute("checked", "true");
theme.addEventListener('click', () => {
    document.querySelector('body').classList = [theme.checked ? 'theme-light' : 'theme-dark'];
    theme.setAttribute("checked", "false");
    console.log(document.querySelector('body').classList);
});


function clickme(e) {
    const parent = e.target.parentElement;
    if (e.target.checked) {
        parent.classList.add('checked');
        cnt--;
    } else {
        parent.classList.remove('checked');
        cnt++;
    }
    updateItemsLeft(cnt);
}

function updateItemsLeft(cnt) {
    const div = document.querySelector('#counter');
    div.innerHTML = `
        ${cnt} items left
    `
}

function removeTodoItem(elem) {
    elem.remove();
}
document.querySelector('.items-clear').addEventListener('click', () => {
    document.querySelectorAll('.todo-item input[type="checkbox"]:checked').forEach(item => {
        removeTodoItem(item.closest('li'));
        updateItemsLeft(cnt);
    });
});

document.querySelectorAll('.items-status input').forEach(radio => {
    radio.addEventListener('change', (e) => {
        filterTodoItems(e.target.id);
    });
});

function filterTodoItems(id) {
    const todoList = document.querySelector('ul');
    const allItems = todoList.querySelectorAll('li');
    console.log('zbtttttttttttt');
    switch (id) {
        case 'all':
            allItems.forEach(item => {
                item.classList.remove('hidden');
            })
            break;
        case 'active':
            allItems.forEach(item => {
                item.querySelector('input').checked ? item.classList.add('hidden') : item.classList.remove('hidden');;
            })
            break;
        default:
            allItems.forEach(item => {
                !item.querySelector('input').checked ? item.classList.add('hidden') : item.classList.remove('hidden');;
            })
            break;
    }
}