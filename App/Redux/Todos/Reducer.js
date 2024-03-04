import initialState from "./InitialState";
import { ADDED, TOGGLED, COLORSELECTED, DELETED, ALLCOMPLETED, CLEARCOMPLETED, LOADED } from "./ActionsType";

// const nextTodoId = (todo) => {
//     console.warn("todo: ",JSON.stringify(todo) )
//     const maxId = todo.reducer((maxId, todo) => Math.max(todo.id, maxId), -1);
//     return maxId + 1
// }

const extractIds = (todos) => todos.map(todo => todo.id);

const nextTodoId = (todos) => {
    const idArray = extractIds(todos);
    const maxId = Math.max(...idArray, -1);
    return maxId + 1;
}


const reducer = (state = initialState, action) => {
    console.warn(action)
    switch (action.type) {

        case LOADED:
            // returning payload list directly
            return action.payload;

        case ADDED:
            return [
                ...state,
                {
                    id: nextTodoId(state),
                    text: action.payload,
                    completed:false

                },
            ];

        case TOGGLED:
            return state.map((todo) => {
                if (todo.id !== action.payload) {
                    return todo;
                }

                return {
                    ...todo,
                    completed: !todo.completed,
                };
            });

        case COLORSELECTED:
            const { todoId, color } = action.payload;
            return state.map((todo) => {
                if (todo.id !== todoId) {
                    return todo;
                }
                return {
                    ...todo,
                    color: color,
                };
            });

        case DELETED:
            return state.filter((todo) => todo.id !== action.payload);

        case ALLCOMPLETED:
            return state.map((todo) => {
                return {
                    ...todo,
                    completed: true,
                };
            });

        case CLEARCOMPLETED:
            return state.filter((todo) => !todo.completed);

        default:
            return state;
    }
};

export default reducer;