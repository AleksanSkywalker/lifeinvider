import React from "react";
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar";
import DialogItem from "../Dialogs/DialogItem/DialogItem";

const Navbar = (props) => {
// debugger

    let sidebarElements = props.state.dialogs.map ( d => <Sidebar name={d.name} img={d.img} id={d.id}/>)

    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="/profile" activeClassName={s.active}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/dialogs" activeClassName={s.active}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/feeds" activeClassName={s.active}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/music" activeClassName={s.active}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/settings" activeClassName={s.active}>Settings</NavLink>
            </div>

            <div className={s.sidebar}>
                {sidebarElements}
            </div>
        </nav>
    );
}

export default Navbar;