import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Post from "./MyPosts/Post/Post";

const Profile = () => {

    let posts = [
        {id: 1, message: 'Hi, how are you?', like: 14},
        {id: 2, message: 'I\'s my first post', like: 42},
        {id: 3, message: 'Yo', like: 420},
        {id: 3, message: 'Yo', like: 420},
        {id: 3, message: 'Yo', like: 420},
    ]

    let postsElements = posts.map ( p => <Post message={p.message} like={p.like}/>);

    return (
        <div>
            <ProfileInfo/>
            <MyPosts/>
            {postsElements}
        </div>
    );
}

export default Profile;