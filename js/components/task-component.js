import { createElement } from "../utils.js";
export default class TaskComponent {
    constructor(taskService, task) {
        this._taskService = taskService;
        this._task = task;
    }

    _getTemplate() {
        return (
            `<div class="taskboard__item task task--${this._task.status}" data-id="${this._task.id}">
              <div class="task__body">
                <p class="task__view">${this._task.title}</p>
                <input class="task__input" type="text" value="Название первой задачи">
              </div>
              <button class="task__edit" type="button" aria-label="Изменить"></button>
            </div>`
        )
    }

    getElement() {
        if (!this._element) {
            this._element = createElement(this._getTemplate());
            this._afterCreateElement();
        }

        return this._element;
    }
    _afterCreateElement() {

    }




}
