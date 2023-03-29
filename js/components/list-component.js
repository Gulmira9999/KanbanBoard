import { InsertPosition, StateActions, STATE_EMPTY, Status, StatusLabel, Text } from '../constants.js';
import { renderElement, setElementVisibility } from '../utils.js';
import AbstractComponent from './abstract-component.js';
import BasketCleanerComponent from './basket-cleaner-component.js';
import EmptyItemComponent from './empty-item-component.js';
import TaskComponent from './task-component.js';

export default class ListComponent extends AbstractComponent {
    constructor(taskService, status) {
        super();
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

    _afterCreateElement() {
        this._addEventListeners();

        if (this._status === Status.BASKET) {
            const basketCleanerComponent = new BasketCleanerComponent(this._taskService);
            const basketCleanerElement = basketCleanerComponent.getElement();
            renderElement(this.getElement(), basketCleanerElement, InsertPosition.BEFOREEND);
        }

        this._renderTasks();
    }

    _renderTasks() {
        this._removeTasks();

        this._tasks.forEach((task) => {
            const taskItemComponent = new TaskComponent(this._taskService, task);
            const taskItemElement = taskItemComponent.getElement();
            renderElement(this.getElement().lastChild.previousElementSibling, taskItemElement, InsertPosition.BEFOREEND);
        });

        this._renderEmptyComponent((this._status === Status.BASKET) ? Text.EMPTY_BASKET : Text.EMPTY_TASK)

    }

    _addEventListeners() {
        window.addEventListener(StateActions.TASK_CREATE, this._changeDataHandler.bind(this));
        window.addEventListener(StateActions.BASKET_CLEANUP, this._changeDataHandler.bind(this));

    }
    _removeTasks() {
        this.getElement().querySelector(`.taskboard__list`).innerHTML = ``;
    }

    _renderEmptyComponent(title) {
        const emptyItemComponent = new EmptyItemComponent(title, this._status, STATE_EMPTY);
        const emptyItemElement = emptyItemComponent.getElement();

        setElementVisibility(emptyItemElement, this._tasks.length === 0);
        renderElement(this.getElement().querySelector(`.taskboard__list`), emptyItemElement, InsertPosition.BEFOREEND);
    }

    _changeDataHandler() {
        this._tasks = this._taskService.getByStatus(this._status);
        this._renderTasks();
    }

}
