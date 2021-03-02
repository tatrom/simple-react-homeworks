import React from "react";
import s from "./HW12.module.css";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import SuperRadio from "../h7/common/c6-SuperRadio/SuperRadio";
import {changeThemeAC} from "./bll/themeReducer";


function HW12() {
    const theme = useSelector<AppStoreType, string>(state => state.theme.theme) // useSelector]]]]]]
    console.log(theme);
    const dispatch = useDispatch();
    const themes = ['dark', 'red', 'green', 'purple', 'pink'];

    const ChangeThemeHandler = (theme: string) => {
        const action = changeThemeAC(theme)
        dispatch(action)
    }

    // useDispatch, onChangeCallback

    return (
        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + '-text']}>
                <SuperRadio options={themes} onChangeOption={ChangeThemeHandler}/>
            </span>

            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}

            <hr/>
        </div>
    );
}

export default HW12;
