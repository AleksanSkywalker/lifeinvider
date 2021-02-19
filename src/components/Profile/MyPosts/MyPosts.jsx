import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div className={s.posts}>
            <div>
                My posts
                <div>
                    <textarea></textarea>
                    <div>
                        <button>Add post</button>
                    </div>
                </div>
                <Post message='Hi, how are you?' like='15'/>
                <Post message="I's my first post" like='20'/>
                <Post message='Yo' like='420'/>
            </div>
        </div>
    );
}

export default MyPosts;