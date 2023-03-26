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


}
