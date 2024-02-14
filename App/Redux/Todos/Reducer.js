import { initialState } from "./InitialState";
import { ADDED, ALLCOMPLETED, CLEARCOMPLETED, COLORSELECTED, DELETED, TOGGLED } from "./ActionsType";

// const nextTodoId = (todo) =>{
//     const maxId = todo.reducer((maxId,todo)=>Math.max(todo.id,maxId),-1)
// }

const extractIds = (todos) => todos.map(todo => todo.id);

const nextTodoId = (todos) => {
    const idArray = extractIds(todos);
    const maxId = Math.max(...idArray, -1);
    return maxId;
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADDED:
            return [
                ...state,
                {
                    id:nextTodoId(state)
                }
            ]

        default:
            break;
    }
} 