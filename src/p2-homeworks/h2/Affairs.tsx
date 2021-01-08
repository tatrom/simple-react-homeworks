import React, {Dispatch, SetStateAction} from "react";
import Affair from "./Affair";
import {AffairType, FilterType} from "./HW2";
import s from './Affairs.module.css'

type AffairsPropsType = { // need to fix any
    data: Array<AffairType>
    setFilter: Dispatch<SetStateAction<FilterType>>
    deleteAffairCallback: (id: number) => void
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a._id}
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => {props.setFilter("all")}; // need to fix
    const setHigh = () => {props.setFilter("high")};
    const setMiddle = () => {props.setFilter("middle")};
    const setLow = () => {props.setFilter("low")};

    return (
        <div className={s.affairs}>

            {mappedAffairs}

            <button className={ s.filterButton} onClick={setAll}>All</button>
            <button className={ s.filterButton} onClick={setHigh}>High</button>
            <button className={ s.filterButton} onClick={setMiddle}>Middle</button>
            <button className={ s.filterButton} onClick={setLow}>Low</button>
        </div>
    );
}

export default Affairs;
