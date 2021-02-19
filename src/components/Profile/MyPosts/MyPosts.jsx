import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {

    let postsData = [
        {id: 1, message: 'Hi, how are you?', like: 14},
        {id: 2, message: 'I\'s my first post', like: 42},
        {id: 3, message: 'Yo', like: 420},
    ]

    return (
        <div className={s.postsBlock}>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <h2> My posts </h2>
            <div className={s.posts}>
            <Post message={postsData[0].message} like={postsData[0].like}/>
            <Post message="I's my first post" like='20'/>
            <Post message='Yo' like='420'/>
            </div>
        </div>
    );
}

export default MyPosts;