import {ActionType} from "../../h10/bll/loadingReducer";

const CHANGE_THEME = 'CHANGE-THEME'
const initState = {
    theme: "dark"
};

export const themeReducer = (state = initState, action: ActionType): any => { // fix any
    switch (action.type) {
        case CHANGE_THEME: {
            let copyState = {...state, theme: action.theme}
            return copyState;
        }
        default:
            return state;
    }
};

export const changeThemeAC = (theme: string): ActionType => {
    return {type: CHANGE_THEME, theme}
}; // fix any