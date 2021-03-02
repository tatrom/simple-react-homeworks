import React, {useState} from "react";
import SuperEditableSpan from "./common/c4-SuperEditableSpan/SuperEditableSpan";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import {restoreState, saveState} from "./localStorage/localStorage";
import s from './HW6.module.css'

function HW6() {
    const initialValue = restoreState("editable-span-value", "Enter text")
    const [value, setValue] = useState<string>(initialValue);

    const save = () => {
        saveState<string>("editable-span-value", value);
    };
    const restore = () => {
        setValue(restoreState("editable-span-value", "Enter text"));
    };

    return (
        <div className={s.container}>
            <hr/>
            homeworks 6

            {/*should work (должно работать)*/}
            <div>
                <SuperEditableSpan
                    value={value}
                    onChangeText={setValue}
                    spanProps={{children: value ? undefined : "enter text...", className: s.span}}
                />
            </div>
            <SuperButton className={`${s.button} ${s.leftButton}`} onClick={save}>save</SuperButton>
            <SuperButton className={s.button} onClick={restore}>restore</SuperButton>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperEditableSpan/>*/}
            <hr/>
        </div>
    );
}

export default HW6;
