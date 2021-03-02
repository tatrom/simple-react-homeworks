import React, {useState} from "react";
import s from './Header.module.css'
import {Modal} from "./pages/Modal";
import {useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";

function Header() {
    const [modalActive, setModalActive] = useState(false)
    const theme = useSelector<AppStoreType, string>(store => store.theme.theme)
    return (
        <div className={`${s.menu} ${s[theme]}`}>
            <Modal active={modalActive} setActive={setModalActive} theme={theme}/>
            <button className={`${s.open_button} ${s[theme]}`} onClick={() => setModalActive(!modalActive)}> open modal window</button>
            Pages
        </div>
    );
}

export default Header;
