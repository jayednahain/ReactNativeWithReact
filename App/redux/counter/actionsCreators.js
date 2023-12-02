import { INCREMENT } from "./actionsTypes";
import { DECREMENT } from "./actionsTypes";

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