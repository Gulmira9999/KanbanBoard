import AddTaskComponent from "./components/add-task-component.js";
import BoardComponent from "./components/board-component.js";
import HeaderComponent from "./components/header-component.js";
import { InsertPosition } from "./constants.js";
import { tasks } from "./data.js";
import TasksService from "./services/task-service.js";
import { renderElement } from "./utils.js";

const taskService = new TasksService(tasks);

const headerComponent = new HeaderComponent('Kanban board');
const headerElement = headerComponent.getElement();
const bodyElement = document.querySelector(`body.board-app`);

renderElement(bodyElement, headerElement, InsertPosition.AFTERBEGIN);

const boardAppInnerElement = document.querySelector(`main > div.board-app__inner`);


const addTaskComponent = new AddTaskComponent(taskService);
const addTaskElement = addTaskComponent.getElement();

renderElement(boardAppInnerElement, addTaskElement, InsertPosition.AFTERBEGIN);

const boardComponent = new BoardComponent(taskService);
const boardElement = boardComponent.getElement();
renderElement(boardAppInnerElement, boardElement, InsertPosition.BEFOREEND);

