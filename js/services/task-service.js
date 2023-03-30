import { StateActions, Status } from '../constants.js';
import { generateId } from '../utils.js';

export default class TasksService {
    constructor(tasks) {
        this._tasks = tasks;
    }

    create(task) {
        task.id = generateId();
        task.status = Status.BACKLOG;
        this._tasks.push(task);

        this._emitEvent(StateActions.TASK_CREATE, task);
    }

    _emitEvent(type, detail) {
        window.dispatchEvent(new CustomEvent(type, { detail }));
    }

    getByStatus(status) {
        return this._tasks.filter((task) => task.status === status);
    }

    cleanupBasket() {
        this._tasks = this._tasks.filter((task) => task.status !== Status.BASKET);
        this._emitEvent(StateActions.BASKET_CLEANUP);
    }

    startTaskEditing(task = {}) {
        this._emitEvent(StateActions.ELEMENT_EDITED, task);
    }

    updateTitle(task) {
        const taskIndex = this._getTaskIndexByID(task.id);

        if (taskIndex !== -1) {
            this._tasks.splice(taskIndex, 1, task);
            this._emitEvent(StateActions.TASK_UPDATE_TITLE, task);
        }
    }

    _getTaskIndexByID(id) {
        return this._tasks.findIndex((el) => el.id === id);
    }

}
