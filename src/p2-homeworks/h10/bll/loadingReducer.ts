const initState = {
    loadStatus: false
};
export type LoadingReducerType = {
    loadStatus: boolean
}

export const loadingReducer = (state: LoadingReducerType = initState, action: ActionType): any => { // fix any
    switch (action.type) {
        case "CHANGE-LOADING": {
            let stateCopy = {...state, loadStatus: action.value}
            return stateCopy;
        }
        default:
            return state;
    }
};

type ChangeLoadingAction = {
    type: "CHANGE-LOADING"
    value: boolean
}

type ChangeThemeAction = {
    type: "CHANGE-THEME"
    theme: string
}

export type ActionType = ChangeLoadingAction | ChangeThemeAction

export const LoadingAC = (value: boolean): ChangeLoadingAction => {
    return {type: "CHANGE-LOADING", value}
}; // fix any