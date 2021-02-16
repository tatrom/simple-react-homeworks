import React, {useState} from "react";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import s from './Clock.module.css'

function Clock() {
    const [timerId, setTimerId] = useState<number>(0);
    const [date, setDate] = useState<Date>();
    const [show, setShow] = useState<boolean>(false);

    const stop = () => {
        // stop
        clearInterval(timerId)
    }

    const start = () => {
        stop();
        const id: number = window.setInterval(() => {
            // setDate
            setDate(new Date);
        }, 1000);
        setTimerId(id);
    }

    const onMouseEnter = () => {
        // show
        setShow(true)
    };
    const onMouseLeave = () => {
        // close
        setShow(false)
    };

    function formattedDate(d: Date) {
        return [d.getDate(), d.getMonth() + 1, d.getFullYear()]
            .map(n => n < 10 ? `0${n}` : `${n}`).join('.');
    }

    const stringTime = date && date.toLocaleTimeString(); // fix with date
    const stringDate = date && formattedDate(date) // fix with date
    return (
        <div className={s.clock}>
            <div className={stringTime && s.time}
                 onMouseEnter={onMouseEnter}
                 onMouseLeave={onMouseLeave}
            >
                {stringTime}
            </div>

            {show && (
                <div className={s.date}>
                    {stringDate}
                </div>
            )}
            <div className={s.buttons}>
                <SuperButton onClick={start}>start</SuperButton>
                <SuperButton onClick={stop}>stop</SuperButton>
            </div>
        </div>
    );
}

export default Clock;
