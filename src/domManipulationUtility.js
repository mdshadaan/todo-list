import { currentProject, projects , todoListItems} from ".";
import { fetchToDoItemsByProjectName, handleProject } from "./ToDoListOperations";

export function createAddToDoListForm(){
    const content = document.querySelector('.content');
    const inputFields = ['Title','Description','Priority'];
    const toDoListDiv = document.createElement('div');
    toDoListDiv.classList.add('todo-list');
    const form = document.createElement('form');
    form.id = 'todo-list-form';
    inputFields.forEach(field => {
        const label = document.createElement('label');
        label.innerText = field;
        const id = field.toLowerCase();
        label.htmlFor = id; 
        const input = document.createElement('input');
        input.type = 'text';
        input.id =id; 
        input.name =id; 
        form.appendChild(label);
        form.appendChild(field === 'Priority' ? createSelectList(field,['High','Medium','Low']) : input);
    })
    const submitButton = document.createElement('input');
    submitButton.type ='submit'; submitButton.value ='Add Task'; submitButton.classList.add('button');
    form.appendChild(submitButton);
    toDoListDiv.appendChild(form);
    content.appendChild(toDoListDiv);
   }

function createSelectList(name , options){
    const selectElement = document.createElement('select');
    selectElement.id = name.toLowerCase(); selectElement.name = name;
    options.forEach(option => {
        const optionElement = document.createElement('option');
        optionElement.value = option.toLowerCase();
        optionElement.innerText = option;
        selectElement.appendChild(optionElement);
    })

    return selectElement;
}

export function createProjectList(){
    const content = document.querySelector('.content');
    const project = document.createElement('div');
    project.classList.add('project');
    //creating div for adding projects - input field and a button
    const addProjectDiv = document.createElement('div');
    addProjectDiv.classList.add('add-project');
    const input = document.createElement('input');
    input.type = 'text'; input.name ='add';
    const addProjectButton = document.createElement('button');
    addProjectButton.innerText ='Add Project'; addProjectButton.classList.add('add-project-btn','button');
    addProjectDiv.appendChild(input); addProjectDiv.appendChild(addProjectButton);
    //UL list to display projects
    const projectListDiv = document.createElement('div'); projectListDiv.classList.add('project-list');
    const list = initialiseProjectListWithDefaultProject();
    //appending the above created divs to the projects list and then attaching that to the main content div.    
    projectListDiv.appendChild(list);
    project.appendChild(addProjectDiv); 
    project.appendChild(projectListDiv);
    content.appendChild(project); 
}

function initialiseProjectListWithDefaultProject(){
    const list = document.createElement('ul');
    const listItem = document.createElement('li');  listItem.classList.add('active'); listItem.id = 'Personal';
    const  anchorTag = document.createElement('a'); anchorTag.href = "#"
    anchorTag.innerHTML = projects[0].name; anchorTag.id = projects[0].name;
    const itemsCount = document.createElement('span'); 
    handleProject(listItem); //event handler for project added
    listItem.appendChild(anchorTag);
    listItem.appendChild(itemsCount);
    list.appendChild(listItem);
    return list; 
}

// Appends todo items to the DOM if todos are already present , if not , creates a div and appends it.
export function addToDoItem(item,incrementItemsCount = true){
    const todoList = document.querySelector('.todo-list');
    let items = document.querySelector('.items');
    if(items === null){
         items = document.createElement('div'); items.classList.add('items'); 
    }
    const todoItem = document.createElement('div');
    const checkbox = document.createElement('input'); checkbox.type = 'checkbox';
    const title = document.createElement('h4'); title.innerHTML = item.title + " : ";
    title.classList.add('title');
    const description = document.createElement('p'); description.innerHTML = item.description;
    description.classList.add('description');
    const priority = document.createElement('span'); priority.innerHTML = item.Priority ;
    priority.classList.add(item.Priority === 'high'? 'high-priority': item.Priority === 'medium'? 'medium-priority':'low-priority');
    const deleteBtn = document.createElement('button'); deleteBtn.innerHTML ='Delete';
    deleteBtn.classList.add("button", "delete-button");
    deleteToDoItem(item, deleteBtn);
    todoItem.classList.add('item'); todoItem.id = item.id;
    todoItem.appendChild(checkbox);
    todoItem.appendChild(title); todoItem.appendChild(description); todoItem.appendChild(priority);
    todoItem.appendChild(deleteBtn); 
    handleCheckBox(todoItem);
    if(incrementItemsCount)
        updateTodoItemCount(currentProject , true);
    items.appendChild(todoItem);
    todoList.appendChild(items);

}

function updateTodoItemCount(projectName , increment){
    const projectListItem = document.querySelector('#' +projectName);
    const itemCount = projectListItem.childNodes[1];
    let count = null;
    projects.forEach(project => {
        if(project.name === projectName){
                project.todoItemCount = increment ? project.todoItemCount +1 : project.todoItemCount -1 ;
            count = project.todoItemCount;
        }  
    })
    if(count === 0){
        itemCount.classList.remove('project-items-count');
        itemCount.innerHTML ='';
        return;
    }
    itemCount.classList.add('project-items-count'); itemCount.innerHTML = count;
}

function handleCheckBox(todoListItem){
    todoListItem.firstChild.addEventListener('click',()=>{
        if(todoListItem.firstChild.checked){
            todoListItem.querySelector('.title').classList.add('strike-through');
            todoListItem.querySelector('.description').classList.add('strike-through');
            todoListItem.firstChild.setChecked = false;
        }else{
            todoListItem.querySelector('.title').classList.remove('strike-through');
            todoListItem.querySelector('.description').classList.remove('strike-through');
            todoListItem.firstChild.setChecked = true;
        }
    })
}

function deleteToDoItem(item, deleteButton){
    deleteButton.addEventListener('click',()=> {
        document.getElementById(item.id).remove();
        todoListItems = todoListItems.filter(todoListItem => todoListItem.id!=item.id);
        updateTodoItemCount(currentProject,false);
    });
}


export function addProject(project){
    const projectList = document.querySelector('.project-list ul');
    const listItem = document.createElement('li'); listItem.classList.add('project-list-item'); listItem.id = project.name;
    const anchorTag = document.createElement('a'); anchorTag.href = "#"; anchorTag.id = project.name;
    anchorTag.innerHTML = project.name;
    const projectDeleteBtn = document.createElement('button'); projectDeleteBtn.classList.add('button' ,'project-delete-btn'); projectDeleteBtn.innerHTML = 'X';
    deleteProject(project.name, projectDeleteBtn);
    const itemsCount = document.createElement('span'); 
    listItem.appendChild(anchorTag);
    listItem.appendChild(itemsCount);
    listItem.appendChild(projectDeleteBtn);
    projectList.appendChild(listItem);    
}


function deleteProject(project,btn){
    btn.addEventListener('click',()=>{
        deleteElement(document.getElementById(project));
        //delete project related todoItems and the project itself
        const projectTodos = fetchToDoItemsByProjectName(project);
        projects = projects.filter(p => p.name !== project);
        todoListItems = todoListItems.filter(item => !projectTodos.includes(item));
    })
   
}

export function updateToDoListItems(todoItems){
    //while recreating the DOM with todoItems for a project , we don't need to update itemsCount , so second param is false
    todoItems.forEach(item => addToDoItem(item,false));
}

export function deleteElement(element){
    element.remove();
}