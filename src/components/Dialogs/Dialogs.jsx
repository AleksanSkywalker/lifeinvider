import React from 'react'
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";

const Dialogs = (props) => {

    let dialogs = [
        {id: 1, name: 'Aleksan'},
        {id: 2, name: 'Serge'},
        {id: 3, name: 'Alex'},
        {id: 4, name: 'Ruslan'},
        {id: 5, name: 'Yuliia'},
        {id: 6, name: 'Yayceslav'},
        {id: 7, name: 'Marina'},
    ]

    let messages = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Fuck you'},
        {id: 3, message: 'Fine! )'},
        {id: 4, message: 'Thanks'},
    ]

    let dialogsElements = dialogs.map ( d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = messages.map ( m => <Message message={m.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}


            </div>

            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    );
}

export default Dialogs;