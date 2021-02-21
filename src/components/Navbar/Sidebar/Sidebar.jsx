import React from "react";
import s from './../Navbar.module.css'
import {NavLink} from "react-router-dom";
import Dialogs from "../../Dialogs/Dialogs";
import DialogItem from "../../Dialogs/DialogItem/DialogItem";

const Sidebar = (props) => {
    let path = "/profile/" + props.id
    return (
        <NavLink to={path} className={s.sidebarItem}>
            <div><img src ={props.img}/></div>
            {props.name}
        </NavLink>
    );
}

export default Sidebar;