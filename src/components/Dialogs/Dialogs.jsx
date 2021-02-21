import React from 'react'
import s from './Dialogs.module.css'
// import {NavLink} from "react-router-dom";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";

const Dialogs = (props) => {
    let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id} img={d.img}/>)
    let messagesElements = props.state.messages.map(m => <Message message={m.message} type={m.type}/>)

    let newMessageElement = React.createRef();
    let sendMessage = () => {
        let text = newMessageElement.current.value;
        alert (text);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <div className={s.messages}>
                    <textarea ref={newMessageElement}></textarea>
                    <div>
                        <button onClick={ sendMessage }>Send</button>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Dialogs;