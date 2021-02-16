import {PeopleType} from "../HW8";

export const homeWorkReducer = (state: Array<PeopleType>, action: ActionType): any => {
    switch (action.type) {
        case "sort": {
            let stateCopy = [...state]
            if (action.payload === "up") {
                debugger
                stateCopy.sort(function (a, b) {
                    let nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase()
                    if (nameA < nameB)
                        return -1
                    if (nameA > nameB)
                        return 1
                    return 0
                })
            }
            if (action.payload === "down") {
                stateCopy.sort(function (a, b) {
                    let nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase()
                    if (nameA < nameB)
                        return -1
                    if (nameA > nameB)
                        return 1
                    return 0
                })
                stateCopy.reverse()
            }
            return stateCopy
        }
        case "check": {
            let stateCopy = state.filter(p => p.age >= 18)
            return stateCopy
        }
        default:
            return state
    }
};

type SortByAlphabetType = {
    type: "sort"
    payload: "up"
}

type SortByAlphabetReverseType = {
    type: "sort"
    payload: "down"
}

type CheckbyAge = {
    type: "check"
    payload: number
}

export type  RootStateType = ReturnType<typeof homeWorkReducer>


export type ActionType = SortByAlphabetType | SortByAlphabetReverseType | CheckbyAge
