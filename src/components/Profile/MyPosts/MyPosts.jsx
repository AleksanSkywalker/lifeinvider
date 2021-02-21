import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {
// debugger
    let postsElements = props.posts.map ( p => <Post message={p.message} like={p.like}/>);

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        alert (text);
    }

    return (
        <div className={s.postsBlock}>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
                </div>
                <div>
                    <button onClick={ addPost }>Add post</button>
                </div>
            </div>
            <h2> My posts </h2>
            {postsElements}
        </div>
    );
}

export default MyPosts;