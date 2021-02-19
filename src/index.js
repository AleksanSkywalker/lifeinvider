import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
    {id: 1, message: 'Hi, how are you?', like: 14},
    {id: 2, message: 'I\'s my first post', like: 42},
    {id: 3, message: 'Yo', like: 420},
    {id: 3, message: 'Yo', like: 420},
    {id: 3, message: 'Yo', like: 420},
]

let dialogs = [
    {id: 1, name: 'Aleksan'},
    {id: 2, name: 'Serge'},
    {id: 3, name: 'Alex'},
    {id: 4, name: 'Ruslan'},
    {id: 5, name: 'Yuliia'},
    {id: 6, name: 'Yayceslav'},
    {id: 7, name: 'Marina'},
]

let messages = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'Fuck you'},
    {id: 3, message: 'Fine! )'},
    {id: 4, message: 'Thanks'},
]


ReactDOM.render(<App posts={posts} dialogs={dialogs} messages={messages}/>, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
