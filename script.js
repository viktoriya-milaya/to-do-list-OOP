'use strict'


const createElement = (htmlElement, className) => {
    const element = document.createElement(htmlElement);
    element.classList.add(className);

    return element;
}


const createTitleTask = () => {
    const inputNewTask = document.querySelector(`.newtask`);
    const titleTask = document.createTextNode(`${inputNewTask.value}`);
    return titleTask;
}


const deletePattern = ({ target }) => {
    target.closest(`.task-list__item`).remove();
};



const createListItem = () => {
    const li = createElement(`li`, `task-list__item`);
    const liDiv = createElement(`div`, `createtask`);
    const label = createElement(`label`, `task`);
    const listInput = createElement(`input`, `task-list__input`);
    const listCheckbox = createElement(`span`, `task-list__checkbox`);
    const buttonDelete = createElement(`button`, `button-delete`);

    const titleTask = createTitleTask();

    li.append(liDiv);
    liDiv.append(label);

    listInput.setAttribute(`type`, `checkbox`);
    label.append(listInput);
    label.append(listCheckbox);
    label.append(titleTask);

    buttonDelete.innerText = `×`;
    li.append(buttonDelete);


    buttonDelete.addEventListener(`click`, () => li.remove());
    listInput.addEventListener(`click`, () => liDiv.classList.toggle(`task_check`));

    return li;
}

document.addEventListener('DOMContentLoaded', () => {

    const inputNewTask = document.querySelector(`.newtask`);
    const buttonPushNewTask = document.querySelector(`.button-push`);
    const taskList = document.querySelector(`.task-list`);
    const buttonClearList = document.querySelector(`.button-clear`);

    const buttonDeleteTask = document.querySelectorAll(`.button-delete`);

    buttonPushNewTask.addEventListener(`click`, () => {

        const value = ``;

        if (inputNewTask.value != value) {
            taskList.append(createListItem());
        }

        const pattern1 = document.getElementById(`pattern1`);
        const pattern2 = document.getElementById(`pattern2`);

        if (pattern1 != null) {
            pattern1.remove();
        }

        if (pattern2 != null) {
            pattern2.remove();
        }

    });

    buttonClearList.addEventListener(`click`, () => taskList.innerHTML = ``);
    buttonDeleteTask.forEach((el) => el.addEventListener(`click`, deletePattern));

});












