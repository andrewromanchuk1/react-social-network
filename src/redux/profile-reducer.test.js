import { addPostActionCreator } from "./profile-reducer"
import profileReducer from "./profile-reducer";

let state = {
   postsData: [
      {id: 1, likesCount: 12, message: 'Hi, how are you?'},
      {id: 2, likesCount: 9, message: 'Good, thank you. How is your mood today?'},
      {id: 3, likesCount: 22, message: 'Great! What can you say about last course?'},
      {id: 4, likesCount: 14, message: 'For me it\'s more than imformative. I can confidently advise it.'},
      {id: 5, likesCount: 17, message: 'That sounds great! Glad that you like it.'}
    ]
};

let action = addPostActionCreator('this is new post');

it('posts number should increase', () => {
   let newState = profileReducer(state, action);
   expect(newState.postsData.length).toBe(6);
});

it('new post message should be correct', () => {
   let newState = profileReducer(state, action);
   expect(newState.postsData[5].message).toBe('this is new post');
});