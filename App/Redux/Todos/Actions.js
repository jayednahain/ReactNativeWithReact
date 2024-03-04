import {
    ADDED,
    ALLCOMPLETED,
    CLEARCOMPLETED,
    COLORSELECTED,
    DELETED,
    TOGGLED,
    LOADED
} from "./ActionsType";

// export const added = (todoText) => {
//     return {
//         type: ADDED,
//         payload: todoText,
//     };
// };

// export const toggled = (todoId) => {
//     console.warn("toggled")
//     return {
//         type: TOGGLED,
//         payload: todoId,
//     };
// };

// export const colorSelected = (todoId, color) => {
//     return {
//         type: COLORSELECTED,
//         payload: {
//             todoId,
//             color,
//         },
//     };
// };

// export const deleted = (todoId) => {
//     return {
//         type: DELETED,
//         payload: todoId,
//     };
// };

// export const allCompleted = () => {
//     return {
//         type: ALLCOMPLETED,
//     };
// };

// export const clearCompleted = () => {
//     return {
//         type: CLEARCOMPLETED,
//     };
// };



const withLog = (actionCreator, actionName)  => (...args) => {
    console.warn(`${actionName} action  called`);
    return actionCreator(...args);
};

const TodoActions = {

    loaded: withLog((todos) => ({
        type: LOADED,
        payload: todos,
    }), 'added'),

    added: withLog((todoText) => ({
        type: ADDED,
        payload: todoText,
    }), 'added'),

    toggled: withLog((todoId) => ({
        type: TOGGLED,
        payload: todoId,
    }), 'toggled'),

    colorSelected: withLog((todoId, color) => ({
        type: COLORSELECTED,
        payload: {
            todoId,
            color,
        },
    }), 'colorSelected'),

    deleted: withLog((todoId) => ({
        type: DELETED,
        payload: todoId,
    }), 'deleted'),

    allCompleted: withLog(() => ({
        type: ALLCOMPLETED,
    }), 'allCompleted'),

    clearCompleted: withLog(() => ({
        type: CLEARCOMPLETED,
    }), 'clearCompleted'),
};


export default TodoActions;