const form = document.getElementById('form');
let title = document.getElementById('validationCustom01');
let startDate = document.getElementById('validationCustom02');
let endDate = document.getElementById('validationCustom03');
let priorityLevel = document.getElementById('validationCustom04');
let category = document.getElementById('validationCustom05');
let desc = document.getElementById('validationCustom06');

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

const updateTodo = ()=> {
    
}
