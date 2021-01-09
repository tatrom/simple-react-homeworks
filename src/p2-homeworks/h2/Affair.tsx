import React from "react";
import { AffairType } from "./HW2";
import s from './Affairs.module.css'
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type AffairPropsType = {
    affair: AffairType
    deleteAffairCallback: (id: number) => void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {props.deleteAffairCallback(props.affair._id)};// need to fix
    return (
        <div className={s.affair}>
            title: {props.affair.name} priority: {props.affair.priority}
            <SuperButton onClick={deleteCallback} className={s.button}>X</SuperButton>
        </div>
    );
}

export default Affair;
