import { COLORCHANGED, STATUSCHANGED } from "./ActionsTypes";
import initialState from "./InitialState";

const reducer = (state = initialState, action) => {
    console.warn("reducer slice")
    switch (action.type) {
        case STATUSCHANGED:
            return {
                ...state,
                status: action.payload
            }
        case COLORCHANGED:
            //3.4-1
            const { color, changeType } = action.payload;
            switch (changeType) {
                case 'added':
                    return {
                        ...state,
                        colors:[
                            ...state.colors,
                            color
                        ]
                    }
                case 'removed':
                    //3.4-2
                    return {
                        ...state,
                        colors: state.colors.filter(existingColor =>{
                            existingColor !== color
                        })
                    }
                default:
                    return state;
            }


        default:
            return state;
    }
}

export default reducer;
