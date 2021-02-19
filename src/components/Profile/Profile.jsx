import React from "react";
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img
                    src='https://img.gta5-mods.com/q95/images/functional-doors-inside-lifeinvader-interior/19446c-nJXleAGpUkiNrcyM2-elVA_0_0.jpg'/>
            </div>
            <div>
                ava+description
            </div>

            <MyPosts/>
        </div>
    );
}

export default Profile;