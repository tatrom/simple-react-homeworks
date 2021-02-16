import React, {useState} from "react";
import s from './Header.module.css'
import {Modal} from "./pages/Modal";

function Header() {
    const [modalActive, setModalActive] = useState(false)
    return (
        <div className={s.menu}>
            <Modal active={modalActive} setActive={setModalActive}/>
            <button className={s.open_button} onClick={() => setModalActive(!modalActive)}> open modal window</button>
            Pages
        </div>
    );
}

export default Header;
