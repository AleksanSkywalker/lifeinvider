import React from "react";
import s from './Post.module.css'

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src='https://mvclip.ru/content/images/artists/3/c27372791182440a996c6e1745522af5.jpg'/>
            {props.message}
            <div>
                <span>
                    {props.like}Like
                </span>
            </div>
        </div>
    );
}

export default Post;