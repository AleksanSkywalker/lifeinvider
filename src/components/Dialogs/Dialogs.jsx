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

    let dialogsData = [
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

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name="Serge" id="2" />
                <DialogItem name="Alex" id="3" />
                <DialogItem name="Ruslan" id="4" />
                <DialogItem name="Yuliia" id="5" />
                <DialogItem name="Yayceslav" id="6" />
                <DialogItem name="Marina" id="7" />
            </div>

            <div className={s.messages}>
                <Message message={messagesData[0].message}/>
                <Message message={messagesData[1].message}/>
                <Message message={messagesData[2].message}/>

            </div>
        </div>
    );
}

export default Dialogs;