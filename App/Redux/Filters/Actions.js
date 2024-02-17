import { COLORCHANGED, STATUSCHANGED } from "./ActionsTypes";

export const colorChange = (color, changedType) => {
    return {
        typeof: COLORCHANGED,
        payload: {
            color, changedType
        }
    }
}

export const statusChange = (status) => {
    return {
        typeof: COLORCHANGED,
        payload: status
        
    }
} 