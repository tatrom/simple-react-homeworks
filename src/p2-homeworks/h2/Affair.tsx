import React from "react";
import { AffairType } from "./HW2";

type AffairPropsType = {
    affair: AffairType
    deleteAffairCallback: (id: number) => void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {props.deleteAffairCallback(props.affair._id)};// need to fix
    return (
        <div>
            title: {props.affair.name} priority: {props.affair.priority}
            <button onClick={deleteCallback}>X</button>
        </div>
    );
}

export default Affair;
