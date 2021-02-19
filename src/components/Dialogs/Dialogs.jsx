import React from 'react'
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>
                    <NavLink to="/dialogs/1">Aleksan</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/2">Serge</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/3">Alex</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/4">Ruslan</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/5">Yuliia</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/6">Yayceslav</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/7">Marina</NavLink>
                </div>
            </div>

            <div className={s.messages}>
                <div>Hi</div>
                <div className={s.message}>Fuck you</div>
                <div className={s.message}>Fine! )</div>
                <div className={s.message}>How are you?</div>
                <div className={s.message}>Thanks</div>
            </div>
        </div>
    );
}

export default Dialogs;