

export function updateProjectList(arr){
    const projectList = document.querySelector('.projects');

    projectList.innerHTML = " ";
    arr.forEach(name => {
        let listItem = document.createElement('li');
        listItem.textContent = name;
        projectList.appendChild(listItem);
    });

}



export function updateTaskList(projectName){
    const container = document.querySelector('.taskList');
    container.innerHTML = ""

    // for (let i = 0; i < localStorage.length; i++) {
    //     let key = localStorage.key(i); // Get the key
    //     let value = JSON.parse(localStorage.getItem(key));

    // }

    let value = JSON.parse(localStorage.getItem(projectName));

    console.log(value);


    value.forEach(task => {
        const taskCard = document.createElement('div');

        taskCard.classList.add('task');

        const completeCheck = document.createElement('input');
        completeCheck.type = 'checkbox';

        const description = document.createElement('h2');
        description.textContent = task.name;

        // const importantCheck = document.createElement('')
        taskCard.appendChild(completeCheck);
        taskCard.appendChild(description);
        container.appendChild(taskCard);
    })


}