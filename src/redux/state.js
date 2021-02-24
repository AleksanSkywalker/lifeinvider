import {rerenderEntireTree} from "../render";

let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi', like: 12},
            {id: 2, message: 'Fuck you', like: 25},
            {id: 3, message: 'Fine! )', like: 1},
            {id: 4, message: 'Thanks', like: 42}
        ],
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Aleksan', img: 'https://www.gta3.ru/uploaded/image/gta5/characters/200px_Artwork-Michael-GTAV.jpg'},
            {id: 2, name: 'Serge', img: 'https://lh3.googleusercontent.com/proxy/tkGjilHhF5gw4E2N6Xx6GK_6sh-57L9LK-9XPiHurFB4oCZlcbqvbMEHBtW37Rg6NMbVkcxpGs8dQ_q9YclOxY4D8-5rUvqB3yieeBRmc0exBYexJ601tVgiBw'},
            {id: 3, name: 'Alex', img: 'https://www.gta3.ru/uploaded/image/gta5/characters/200px_Artwork-Franklin-GTAV.jpg'},
            {id: 4, name: 'Ruslan', img: 'https://gtainfo.ru/media/gta-5-and-gta-online-tips-750x410.jpg'},
            {id: 5, name: 'Yuliia', img: 'https://lh3.googleusercontent.com/proxy/ElyYPX47vnj6xzxmFlmZ-i2V58i5at2_cDTafQUHOOYQD4YMN28Coi7UtpYcMNrrn4zUfVnDmCrq7LJuWnTSax--mo1Bdp38Z-yxamclvfWnHZgM0wI'},
            {id: 6, name: 'Yayceslav', img: 'https://lh3.googleusercontent.com/proxy/Rdb8OLq4rIRz9o4eqIHRsddy-EgBuO1IOU9Az0Ptgh_Hk2WNKajg-5ybkJetN9H3EuvSjwE3i4BjItzaTC7IqOXESLvo'},
            {id: 7, name: 'Marina', img: 'https://gta5db.ru/img.php?id=604'},
        ],
    // dialogsPage: {
    //     dialogs: [
    //         {id: 1, name: 'Aleksan'},
    //         {id: 2, name: 'Serge'},
    //         {id: 3, name: 'Alex'},
    //         {id: 4, name: 'Ruslan'},
    //         {id: 5, name: 'Yuliia'},
    //         {id: 6, name: 'Yayceslav'},
    //         {id: 7, name: 'Marina'},
    // ],
    //     messages: [
    //         {id: 1, message: 'Hi'},
    //         {id: 2, message: 'Fuck you'},
    //         {id: 3, message: 'Fine! )'},
    //         {id: 4, message: 'Thanks'},
    //     ]
        messages: [
            {id: 1, message: 'Hi', type: 1},
            {id: 2, message: 'Fuck you', type: 0},
            {id: 3, message: 'Fine! )', type: 1},
            {id: 4, message: 'Thanks', type: 1},
        ]
    },

    // images: {
    //     avatars: [
    //         {id: 1, img: 'https://www.gta3.ru/uploaded/image/gta5/characters/200px_Artwork-Michael-GTAV.jpg'},
    //         {id: 2, img: 'https://lh3.googleusercontent.com/proxy/tkGjilHhF5gw4E2N6Xx6GK_6sh-57L9LK-9XPiHurFB4oCZlcbqvbMEHBtW37Rg6NMbVkcxpGs8dQ_q9YclOxY4D8-5rUvqB3yieeBRmc0exBYexJ601tVgiBw'},
    //         {id: 3, img: 'https://www.gta3.ru/uploaded/image/gta5/characters/200px_Artwork-Franklin-GTAV.jpg'},
    //         {id: 4, img: 'https://gtainfo.ru/media/gta-5-and-gta-online-tips-750x410.jpg'},
    //         {id: 5, img: 'https://lh3.googleusercontent.com/proxy/ElyYPX47vnj6xzxmFlmZ-i2V58i5at2_cDTafQUHOOYQD4YMN28Coi7UtpYcMNrrn4zUfVnDmCrq7LJuWnTSax--mo1Bdp38Z-yxamclvfWnHZgM0wI'},
    //         {id: 6, img: 'https://lh3.googleusercontent.com/proxy/Rdb8OLq4rIRz9o4eqIHRsddy-EgBuO1IOU9Az0Ptgh_Hk2WNKajg-5ybkJetN9H3EuvSjwE3i4BjItzaTC7IqOXESLvo'},
    //         {id: 7, img: 'https://gta5db.ru/img.php?id=604'},
    //     ]
    // }
}

export let addPost = (postMessage) => {
    debugger;
        let newPost = {
            id:12,
            message: postMessage,
            like: 0,
        };
        state.profilePage.posts.push(newPost);
        rerenderEntireTree(state);
    }
export default state;