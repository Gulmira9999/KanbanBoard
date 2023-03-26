export const InsertPosition = {
    BEFOREBEGIN: `beforebegin`,
    AFTERBEGIN: `afterbegin`,
    BEFOREEND: `beforeend`,
    AFTEREND: `afterend`,
};

export const Status = {
    BACKLOG: `backlog`,
    PROCESSING: `processing`,
    DONE: `done`,
    BASKET: `basket`,
};

export const StateActions = {
    TASK_CREATE: `task-create`,
    TASK_UPDATE_TITLE: `task-update-title`,
    TASK_UPDATE_POSITION: `task-update-position`,
    TASK_DELETE: `task-delete`,
    BASKET_CLEANUP: `basket-cleanup`,
    ELEMENT_DRAGOVER: `elementDragover`,
    ELEMENT_EDITED: `elementEdited`,
};


export function generateId() {
    return Math.random().toString(36).substr(2, 9);
}

export const MIN_TITLE_LENGTH = 2;
