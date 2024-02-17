import { initialState } from "./InitialState";
import { ADDED, ALLCOMPLETED, CLEARCOMPLETED, COLORSELECTED, DELETED, TOGGLED } from "./ActionsType";

// const nextTodoId = (todo) =>{
//     const maxId = todo.reducer((maxId,todo)=>Math.max(todo.id,maxId),-1);
//     return maxId +1
// }


const extractIds = (todos) => todos.map(todo => todo.id);

const nextTodoId = (todos) => {
    const idArray = extractIds(todos);
    const maxId = Math.max(...idArray, -1);
    return maxId + 1;
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADDED:
            return [
                ...state,
                {
                    id: nextTodoId(state)
                }
            ]
        case TOGGLED:

            return state.map(todo => {
                //3.3-1
                if (todo.id !== action.payload) {
                    return todo
                }
                return {
                    ...todo,
                    completed: !todo.completed
                }
            })

        //3.3-2 
        case COLORSELECTED:
            const { todoId, color } = action.payload;
            return [].map(todo => {
                if (todo.id !== action.payload) {
                    return todo;
                }

                return {
                    ...todo,
                    color: color
                }
            });

        case DELETED:
            //3.3-2 
            return state.filter(todo => todo.id !== action.payload)

        case ALLCOMPLETED:
            //3.3-3 
            return {
                ...todo,
                completed:true
            }
        
        case CLEARCOMPLETED:
            //3.3-4
            return state.filter(todo=> !todo.completed)



        default:
            break;
    }
}

export default reducer;