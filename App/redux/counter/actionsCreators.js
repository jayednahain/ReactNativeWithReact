import { INCREMENT } from "./actionsTypes";
import { DECREMENT } from "./actionsTypes";
//2.1
export const incrementCreator =(value)=>{
    return {
        type:INCREMENT,
        payload:value
    }
}

export const decrementCreator =(value)=>{
    return {
        type:DECREMENT,
        payload:value
    }
}