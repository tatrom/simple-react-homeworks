import React from "react";
import style from './Message.module.css'

type TypeOfMessage = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: TypeOfMessage) {
    return (
        <div className={style.container}>
            <img className={style.avatar} src={props.avatar} alt="img"/>
            <div className={style.containerMessage}>
                <div className={style.name}>
                    {props.name}
                </div>
                <div className={style.message}>
                    {props.message}
                </div>
                <div className={style.time}>
                    {props.time}
                </div>
            </div>
        </div>
    );
}

export default Message;
