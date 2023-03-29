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
        console.log('clean2');
        this._tasks = this._tasks.filter((task) => task.status !== Status.BASKET);
        this._emitEvent(StateActions.BASKET_CLEANUP);
    }

}
