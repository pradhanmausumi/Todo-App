let todoList=[
    {item:'buy milk'
    ,dueDate:'18/02/24'
},
{item:'make tea'
,dueDate:'18/02/24'}
];
displayItems();

function addTodo(){
    let inputElement=document.querySelector('#todo-input');
    let dateElement=document.querySelector('#todo-date');
let todoDate=dateElement.value;
    let todoItem=inputElement.value;
    console.log(todoItem);
    
    todoList.push({item:todoItem,dueDate:todoDate});
    inputElement.value='';
    dateElement.value='';
    displayItems();
}

function displayItems(){
let containerElements=document.querySelector('.todo-container')

let newHtml='';

for(let i=0;i<todoList.length;i++){
    let {item ,dueDate}=todoList[i];
    
    newHtml+=`
    <span>${item}</span>
    <span>${dueDate}</span>
    <button class="btn-delete" onclick="todoList.splice(${i},1);
    displayItems();">delete</button>`;

// containerElements.innerText=containerElements.innerText+todoList[i];
// innerText+"\n" +todoList[i];
}
containerElements.innerHTML=newHtml;
}