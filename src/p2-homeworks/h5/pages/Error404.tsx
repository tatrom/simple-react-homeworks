import React from "react"
import s from './Error404.module.css'

function Error404() {
    return (
        <div className={s.errorContainer}>
            <div className={s.errorCode}>404</div>
            <div className={s.errorText}>Page not found!</div>
            <div className={s.errorImg}>—ฅ/ᐠ.̫ .ᐟ\ฅ—</div>
        </div>
    );
}

export default Error404;
