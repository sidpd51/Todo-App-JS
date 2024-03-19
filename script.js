const form = document.getElementById('form');
let title = document.getElementById('validationCustom01');
let startDate = document.getElementById('validationCustom02');
let endDate = document.getElementById('validationCustom03');
let priorityLevel = document.getElementById('validationCustom04');
let category = document.getElementById('validationCustom05');
let desc = document.getElementById('validationCustom06');
let realMain = document.getElementById('real-main');
let runningTasks = document.getElementById('runningTasks');
let mainInfo = document.getElementById('main-info');
let mainHeading = document.getElementById('main-heading');
let orderGroup = document.getElementById('order-group');
let list = document.getElementById('list');
let load = document.getElementById('load');
let addTask = document.getElementById('addTasks');

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    formValidation();
});

const formValidation = ()=>{
    let isValid = true;

    let date = new Date();
    let day = date.getDay()+1;
    let month = date.getMonth()+1;
    let year = date.getFullYear();
    let currentDate = `${year}-${month}-${day}`;

    if(title.value.trim()==='') {
        isValid=false;
        console.log('title error')
    }
    if(!endDate.value || endDate.value<currentDate) {
        isValid=false;
        console.log('enddate error')
    }
    if(!priorityLevel.value) {
        isValid=false;
        console.log('priority error')
    }
    if(!category.value) {
        isValid=false;
        console.log('category error')
    }
    if(!desc.value) {
        isValid=false;
        console.log('desc error')
    }

    if(isValid){
        createTodo();
    }else {
        console.log('invalid');
    }
}

let todos =[];
const createTodo = ()=> {
    let date = new Date();
    let day = date.getDay()+1;
    let month = date.getMonth()+1;
    let year = date.getFullYear();
    let currentDate = `${year}-${month}-${day}`;
    let todo = {
        title: title.value,
        startDate: currentDate,
        endDate: endDate.value,
        priorityLevel: priorityLevel.value,
        category: category.value,
        description: desc.value
    }
    todos.push(todo);
    alert('todo added!');
    // reset function 
}


runningTasks.addEventListener('click', ()=>{
    mainHeading.innerHTML='Running Tasks';
    mainInfo.classList.add('display-none');
    orderGroup.classList.add('display-none');
    realMain.classList.add('display-flex');
    load.classList.add('display-block');

    renderTodos();
})

addTask.addEventListener('click', ()=> {
    mainHeading.innerHTML='Create your task';
    mainInfo.classList.remove('display-none');
    orderGroup.classList.remove('display-none');
    realMain.classList.remove('display-flex');
    load.classList.remove('display-block');
})

const renderTodos = () => {
    console.log('render todo')
    list.innerHTML=todos.map((todo,index) => {
        return `<div class="col col-sm-6 ">
        <div class="todo-card mx-auto d-flex flex-column gap-3 p-4 rounded-3">
            <div class="todo-title-info d-flex align-items-center justify-content-between">
                <span class="todo-title fw-medium">${todo.title}</span>
                <i class="fa-solid fa-circle-info fa-lg" style="color: #FFDDD2;"></i>
            </div>
            <div class="todo-date-info d-flex align-items-center justify-content-between ">
                <span class="todo-date fw-medium">Start date: ${todo.endDate}</span>
                <i class="fa-solid fa-pen-to-square fa-lg" style="color: #FFDDD2;" onclick=updateTodo(${index})></i>
            </div>
            <div class="todo-delete-info d-flex align-items-center justify-content-between">
                <span class="mark-as-completed fw-medium"><i class="fa-regular fa-square fa-lg
                    me-2" style="color: #FFDDD2;"></i>Mark as completed</span>
                <i class="fa-regular fa-trash-can fa-lg" style="color: #FFDDD2;" onclick=deleteTodo(${index})></i>
            </div>
        </div>
      </div>`
    }).join(' ');
}


