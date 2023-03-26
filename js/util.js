import { InsertPosition } from "./constants.js";

export function createElement(template) {
    const element = document.createElement(`div`);
    element.innerHTML = template;

    return element.firstElementChild;
}

export function renderElement(container, element, insertPosition = InsertPosition.BEFOREEND, referenceElement = undefined) {
    switch (insertPosition) {
        case (InsertPosition.BEFOREEND):
            container.append(element);
            break;
        case (InsertPosition.AFTERBEGIN):
            container.prepend(element);
            break;
        case (InsertPosition.BEFOREBEGIN):
            container.insertBefore(element, referenceElement);
            break;
    }
}