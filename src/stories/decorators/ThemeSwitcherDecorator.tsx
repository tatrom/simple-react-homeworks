import {combineReducers, createStore} from "redux";
import {loadingReducer} from "../../p2-homeworks/h10/bll/loadingReducer";
import {themeReducer} from "../../p2-homeworks/h12/bll/themeReducer";
import {AppStoreType} from "../../p2-homeworks/h10/bll/store";
import {Provider} from "react-redux";
import React from "react";

const rootReducer = combineReducers({
    loading: loadingReducer,
    theme: themeReducer
})

const initialState: AppStoreType = {
    loading: false,
    theme: 'green'
}

const ThemeSwitcherStore = createStore(rootReducer, initialState as AppStoreType)

export const ThemeSwitcherDecorator = (storyFn: any) => {
    return <Provider store={ThemeSwitcherStore}>{storyFn()}</Provider>
}