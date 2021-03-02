import React from 'react'
import HW7 from "../../h7/HW7";
import HW8 from "../../h8/HW8";
import s from './Junior.module.css'
import HW9 from "../../h9/HW9";
import HW10 from "../../h10/HW10";
import HW11 from "../../h11/HW11";
import theme from '../../../p1-main/m1-ui/u1-app/Theme.module.css'
import {useSelector} from "react-redux";
import {AppStoreType} from "../../h10/bll/store";

export function Junior() {
    const themeStyle = useSelector<AppStoreType, string>(store => store.theme.theme)

    return (
        <div className={`${s.junior} ${theme[themeStyle]}`}>
            <HW7/>
            <HW8/>
            <HW9/>
            <HW10/>
            <HW11/>
        </div>
    )
}
