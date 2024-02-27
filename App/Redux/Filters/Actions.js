import { COLORCHANGED, STATUSCHANGED } from "./ActionsTypes";

export const colorChanged = (color, changeType) => {
    return {
        type: COLORCHANGED,
        payload: {
            color,
            changeType,
        },
    };
};

export const statusChanged = (status) => {
    console.warn("",status)
    return {
        type: STATUSCHANGED,
        payload: status,
    };
};