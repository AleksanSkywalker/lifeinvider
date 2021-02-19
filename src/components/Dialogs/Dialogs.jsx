import React from 'react'
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {

    let path = "/dialogs/" + props.id

    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={s.dialog}>{props.message}</div>
    )
}

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

    let messagesData = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Fuck you'},
        {id: 3, message: 'Fine! )'},
        {id: 4, message: 'Thanks'},
    ]

    let dialogsElements = dialogs.map ( d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = messagesData.map ( m => <Message message={m.message}/>)

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