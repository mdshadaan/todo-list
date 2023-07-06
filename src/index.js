/*
1) Create form for todo list
2) Create seperate modules for business logic and DOM manipulation stuff
3) Generate everything using JS
4) work on css later , focus on functionality


*/
import { createAddToDoListForm, createProjectList,addToDoItem,addProject } from "./domManipulationUtility";
import { createToDoListItem,createProject ,handleProject, clearInputField} from "./ToDoListOperations";
import './style.css';

export let currentProject = 'Personal';
export let projects = [{name:'Personal', todoItemCount:0}]
export let todoListItems = [];

createProjectList();
createAddToDoListForm();

const form = document.getElementById('todo-list-form');
const addProjectButton = document.querySelector('.add-project-btn');
form.onsubmit = (e)=> {
    e.preventDefault();
    createToDoListItem(form);
    addToDoItem(todoListItems[todoListItems.length-1],true);
}
addProjectButton.addEventListener('click', e => {
    const input = document.querySelector('.add-project input');
    if(input.value){
        createProject(input.value);
        addProject(projects[projects.length-1]);
        clearInputField(input);
        const projectListItem = document.querySelector('.project-list ul li:last-child');
        handleProject(projectListItem);
    }
});

   
