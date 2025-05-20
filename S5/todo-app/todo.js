tab = ['Aller faire du java', 'Donner un cours en C++'];


const taskList = document.getElementById('task_list');

for(let name of tab){
    const input = document.createElement('input');
    input.type = 'checkbox';

    const taskName = document.createElement('span');
    taskName.innerText = name
    taskName.classList.add('todo-name');


    const btnModifier = document.createElement('button');
    btnModifier.innerText = 'M';

    const btnSupprimer = document.createElement('button');
    btnSupprimer.innerText = 'S';

    const div = document.createElement('div');
    div.appendChild(btnModifier);
    div.appendChild(btnSupprimer);

    const li = document.createElement('li');
    li.appendChild(input);
    li.appendChild(taskName);
    li.appendChild(div);

    taskList.appendChild(li);
}
