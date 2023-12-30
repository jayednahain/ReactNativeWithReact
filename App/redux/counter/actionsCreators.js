import { INCREMENT } from "./actionsTypes";
import { DECREMENT } from "./actionsTypes";
//2.1
export const incrementActionCreator =(value)=>{
    console.log("## incrementActionCreator body")
    return {
        type:INCREMENT,
        payload:value
    }
}

export const decrementActionCreator =(value)=>{
    console.log("## decrementActionCreator body")
    return {
        type:DECREMENT,
        payload:value
    }
}