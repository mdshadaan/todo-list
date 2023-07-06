import { projects, todoListItems , currentProject,} from ".";
import { updateToDoListItems, deleteElement } from "./domManipulationUtility";
import { v4 as uuidv4 } from 'uuid';

export function createToDoListItem(form){
    const formData = new FormData(form);
    const toDoItem = {};
    toDoItem['id'] = uuidv4();
    formData.forEach((value,key)=> toDoItem[key]= value);
    toDoItem['project'] = currentProject;
    todoListItems.push(toDoItem);
    //empties out the form input fields after we add a task
    form.reset();
}


export function createProject(projectName){
    projects.push({name:projectName, todoItemCount:0});
}

//event handler for individual project
// Fetches all todos for a particular project , clears the DOM and updates it with todos for that project.
export function handleProject(projectListItem){
    projectListItem.addEventListener('click',(e) => {
        currentProject = projectListItem.firstChild.getAttribute('id');
        if(document.querySelector('.active')){
            document.querySelector('.active').classList.remove('active');
        }
        projectListItem.classList.add('active');
        const todoItems = fetchToDoItemsByProjectName(currentProject);
        const items = document.querySelector('.items');
        //check items count
        if(items){
            deleteElement(items);
        }
        updateToDoListItems(todoItems);
    })
}

export function fetchToDoItemsByProjectName(project){
    return todoListItems.filter(todoItem => todoItem.project === project);
}

export function clearInputField(input){
    input.value = '';
}
