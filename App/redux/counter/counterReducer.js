import { INCREMENT,DECREMENT } from "./actionsTypes";

const initialState ={
    value:0
};
//2.2
const counterReducer = (state= initialState,action)=>{
    switch (action.type) {
        case INCREMENT:
            return{
                ...state,
                value :state.value+1
            }
        case DECREMENT:
            return{
                ...state,
                value : state.value>0 ? state.value-1 :0
            }    
        default:
            return state;
    }
}
export default counterReducer;