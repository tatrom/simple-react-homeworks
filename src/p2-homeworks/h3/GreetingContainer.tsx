import React, {useState} from "react";
import Greeting from "./Greeting";
import {UserType} from "./HW3";
import s from './Greeting.module.css'

type GreetingContainerPropsType = {
    users: Array<UserType> // need to fix any
    addUserCallback: (name: string) => void // need to fix any
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>(""); // need to fix any
    const [error, setError] = useState<string>(""); // need to fix any

    const setNameCallback = (e: string) => {
        setName(e); // need to fix
    };
    const addUser = (name: string) => {
        addUserCallback(name)
        alert(`Hello, ${name} !`); // need to fix
    };

    const totalUsers = users.length; // need to fix

    return (
        <div className={s.greetingContainer}>
            <Greeting
                name={name}
                setNameCallback={setNameCallback}
                addUser={addUser}
                error={error}
                totalUsers={totalUsers}
                setError={setError}
            />
        </div>
    );
}

export default GreetingContainer;
