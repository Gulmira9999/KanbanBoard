import { createElement } from "../utils.js";
export default class EmptyItemComponent {
    constructor(title, taskStatus, status) {
        this._title = title;
        this._taskStatus = taskStatus;
        this._status = status;
    }

    _getTemplate() {
        return (
            `<div class="taskboard__item task task--${this._taskStatus} task--${this._status}">
              <p>${this._title}</p>
            </div>`
        );
    }

    getElement() {
        if (!this._element) {
            this._element = createElement(this._getTemplate());
        }

        return this._element;
    }
}
