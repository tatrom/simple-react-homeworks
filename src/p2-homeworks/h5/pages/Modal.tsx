import React, {SetStateAction, Dispatch} from "react";
import s from './Modal.module.css'
import {NavLink} from "react-router-dom";
import {PATH} from "../Routes";

type ModalType = {
    active: boolean
    setActive: Dispatch<SetStateAction<boolean>>
}

export const Modal = ({active, setActive}: ModalType) => {
    return (
        <div className={active ? s.modal + " " + s.active : s.modal}>
            <button  className={s.close_button + " " + s.button} onClick={ () => setActive(!active)}>X</button>
            <NavLink className={s.button} to={PATH.PRE_JUNIOR}> PreJunior </NavLink>
            <NavLink className={s.button} to={PATH.JUNIOR}> Junior </NavLink>
            <NavLink className={s.button} to={PATH.STRONG_JUNIOR}> Junior+ </NavLink>
        </div>
    )
}
