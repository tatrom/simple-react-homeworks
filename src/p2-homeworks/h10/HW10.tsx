import React from "react";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./bll/store";
import {LoadingAC, LoadingReducerType} from "./bll/loadingReducer";
import {CircularProgress} from "@material-ui/core";

import s from './HW10.module.css'

function HW10() {
    // useSelector, useDispatch
    const loading = useSelector<AppStoreType, LoadingReducerType>(store => store.loading.loadStatus)
    const dispatch = useDispatch()

    function sayHi() {
        console.log('hello')
    }

    const setLoading = () => {

        dispatch(LoadingAC(!loading))

        function CallDispatch() {
            debugger
            dispatch(LoadingAC(false))
        }

        setTimeout(CallDispatch, 5000)
        console.log("loading...");
    };
    return (
        <div className={s.container}>
            <hr/>
            homeworks 10
            {/*should work (должно работать)*/}
            {loading
                ? (
                    // <div >крутилка...</div>
                    <div>
                        <CircularProgress/>
                    </div>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    );
}

export default HW10;
