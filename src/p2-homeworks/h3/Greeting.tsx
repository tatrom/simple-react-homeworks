import React, { KeyboardEvent, Dispatch, SetStateAction} from "react";
import s from "./Greeting.module.css";
import SuperInputText from "../h4/common/c1-SuperInputText/SuperInputText";

type GreetingPropsType = {
    name: string
    setNameCallback: (name: string) => void
    addUser: (name: string) => void
    error: string
    totalUsers: number
    setError: Dispatch<SetStateAction<string>>
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, setError} // деструктуризация пропсов
) => {
    const inputClass = error ? s.error : s.input;



    const AddUser = () => {
        const newName = name.trim()
        if (newName) {
            addUser(newName)
            setNameCallback("")
            setError("");
        } else {
            setError("The input field is empty!");
        }
    }
    const OnClickHandler = () => {
        AddUser()
    }
    const OnKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.charCode === 13) {
            AddUser()
        }
    }
    return (
        <div>
            {/*<input value={name}*/}
            {/*       onChange={el => setNameCallback(el.currentTarget.value)}*/}
            {/*       onKeyPress={OnKeyPressHandler}*/}
            {/*       className={inputClass}/>*/}

            <SuperInputText value={name}
                            onChange={el => setNameCallback(el.currentTarget.value)}
                            onKeyPress={OnKeyPressHandler}
                            className={inputClass} />
            <span className={s.errorText}>{error}</span>
            <button className={s.button} onClick={OnClickHandler}>add</button>
            <span>{totalUsers}</span>
        </div>
    );

}

export default Greeting;
