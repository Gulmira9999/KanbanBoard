import { createElement } from "../util.js";
export default class HeaderComponent {
    constructor(name) {
        this._name = name;
    }

    _getTemplate() {
        return (
            `<header class="board-app__header">
        <div class="board-app__inner">
          <h1>${this._name}</h1>
        </div>
      </header>`
        );
    }

    getElement() {
        if (!this._element) {
            this._element = createElement(this._getTemplate());
        }

        return this._element;
    }
}
