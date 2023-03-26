import HeaderComponent from "./components/header-component.js";
import { InsertPosition } from "./constants.js";
import { renderElement } from "./util.js";

const headerComponent = new HeaderComponent('Kanban board');
const headerElement = headerComponent.getElement();
const bodyElement = document.querySelector(`body.board-app`);

renderElement(bodyElement, headerElement, InsertPosition.AFTERBEGIN);