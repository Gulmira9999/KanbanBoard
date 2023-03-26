import { StatusLabel } from '../constants.js';

export default class ListComponent {
    constructor(taskService, status) {
        this._taskService = taskService;
        this._status = status;
        this._title = StatusLabel[status];
        this._tasks = this._taskService.getByStatus(status);
    }

    _getTemplate() {
        return (
            `<article class="taskboard__group taskboard__group--${this._status}">
            <h3 class="taskboard__group-heading taskboard__group-heading--${this._status}">${this._title}</h3>
            <div class="taskboard__list" id="${this._status}"></div>
           </article>`
        );
    }

    getElement() {
        if (!this._element) {
            this._element = createElement(this._getTemplate());
            this._afterCreateElement();
        }

        return this._element;
    }

    _afterCreateElement() {

        this._renderTasks();
    }

    _renderTasks() {
        this._removeTasks();

    }


    _removeTasks() {
        this.getElement().querySelector(`.taskboard__list`).innerHTML = ``;
    }

    _changeDataHandler() {
        this._tasks = this._taskService.getByStatus(this._status);
        this._renderTasks();
    }

}
