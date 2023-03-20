import profileReducer from "./profile-reducer";
import dialogesReducer from "./dialoges-reducer";
import navbarReducer from "./navbar-reducer";

const store = {
   // _state: {
   //    profilePage: {
   //       postsData: [
   //          {id: 0, likesCount: 12, message: 'Hi, how are you?'},
   //          {id: 1, likesCount: 9, message: 'Good, thank you. How is your mood today?'},
   //          {id: 2, likesCount: 22, message: 'Great! What can you say about last course?'},
   //          {id: 3, likesCount: 14, message: 'For me it\'s more than imformative. I can confidently advise it.'},
   //          {id: 4, likesCount: 17, message: 'That sounds great! Glad that you like it.'}
   //        ],
   //        textValue: '',
   //    },
   //    messagePage: {
   //       dialogesData: [
   //          {name: 'Andrew', id: 0, img: 'https://www.wydawnictwoliteratura.pl/pub/skin/wyd-skin/img/avatar.png'},
   //          {name: 'Valerii', id: 1, img: 'https://www.wydawnictwoliteratura.pl/pub/skin/wyd-skin/img/avatar.png'},
   //          {name: 'Max', id: 2, img: 'https://www.wydawnictwoliteratura.pl/pub/skin/wyd-skin/img/avatar.png'},
   //          {name: 'John', id: 3, img: 'https://www.wydawnictwoliteratura.pl/pub/skin/wyd-skin/img/avatar.png'},
   //          {name: 'Pavlo', id: 4, img: 'https://www.wydawnictwoliteratura.pl/pub/skin/wyd-skin/img/avatar.png'},
   //          {name: 'Nazarii', id: 5, img: 'https://www.wydawnictwoliteratura.pl/pub/skin/wyd-skin/img/avatar.png'},
   //          {name: 'Mykhailo', id: 6, img: 'https://www.wydawnictwoliteratura.pl/pub/skin/wyd-skin/img/avatar.png'},
   //          {name: 'Petro', id: 7, img: 'https://www.wydawnictwoliteratura.pl/pub/skin/wyd-skin/img/avatar.png'}
   //       ],
   //       messageData: [
   //          {id: 0, message: 'Hello. How are you?'},
   //          {id: 1, message: 'How about your course?'},
   //          {id: 2, message: 'Studiing goes pretty well'},
   //          {id: 3, message: 'We\'re going to mountains this weekend. Would you go with us?'}
   //       ],
   //       messageValue: '',
   //    },
   //    navbarPage: {
   //       friendsList: [
   //          {id: 0, name:'Andy', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt-YkG5DuyGAhJ0eDLCPbC5MBOs9m5cXX8yA&usqp=CAU'},
   //          {id: 1, name:'Sara', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt-YkG5DuyGAhJ0eDLCPbC5MBOs9m5cXX8yA&usqp=CAU'},
   //          {id: 2, name:'Peter', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt-YkG5DuyGAhJ0eDLCPbC5MBOs9m5cXX8yA&usqp=CAU'},
   //       ]
   //    }
   // },

   // getState() {
   //    return this._state;
   // },

   // _renderTree() {
   // },

   // subscribe(observer) {
   //    this._renderTree = observer;
   // },

   dispatch(action) {

      this._state.profilePage = profileReducer(this._state.profilePage, action);
      this._state.messagePage = dialogesReducer(this._state.messagePage, action);
      this._state.navbarPage = navbarReducer(this._state.navbarPage, action);

      // this._renderTree(this._state);
   }
}

window.store = store;

export default store;