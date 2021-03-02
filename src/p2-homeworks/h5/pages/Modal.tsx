import React, {SetStateAction, Dispatch} from "react";
import s from './Modal.module.css'
import {NavLink} from "react-router-dom";
import {PATH} from "../Routes";
import SuperButton from "../../h4/common/c2-SuperButton/SuperButton";

type ModalType = {
    active: boolean
    setActive: Dispatch<SetStateAction<boolean>>
    theme: string
}

export const Modal = ({active, setActive, theme}: ModalType) => {
    return (
        <div className={active ? s.modal + " " + s.active+ " " + s[theme] : s.modal}>
            <SuperButton className={s.close_button + " " + s.button} onClick={() => setActive(!active)}>X</SuperButton>
            <NavLink className={`${s.button} ${s[theme]}`} to={PATH.PRE_JUNIOR}> PreJunior </NavLink>
            <NavLink className={`${s.button} ${s[theme]}`} to={PATH.JUNIOR}> Junior </NavLink>
            <NavLink className={`${s.button} ${s[theme]}`} to={PATH.STRONG_JUNIOR}> Junior+ </NavLink>
        </div>
    )
}
