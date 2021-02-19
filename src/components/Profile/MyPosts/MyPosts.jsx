import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postsElements = props.posts.map ( p => <Post message={p.message} like={p.like}/>);

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
            {postsElements}
        </div>
    );
}

export default MyPosts;