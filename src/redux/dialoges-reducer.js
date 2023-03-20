const ADD_MESSAGE = 'ADD-MESSAGE';

const initialDialoges = {
   dialogesData: [
      {name: 'Andrew', id: 0, img: 'https://www.wydawnictwoliteratura.pl/pub/skin/wyd-skin/img/avatar.png'},
      {name: 'Valerii', id: 1, img: 'https://www.wydawnictwoliteratura.pl/pub/skin/wyd-skin/img/avatar.png'},
      {name: 'Max', id: 2, img: 'https://www.wydawnictwoliteratura.pl/pub/skin/wyd-skin/img/avatar.png'},
      {name: 'John', id: 3, img: 'https://www.wydawnictwoliteratura.pl/pub/skin/wyd-skin/img/avatar.png'},
      {name: 'Pavlo', id: 4, img: 'https://www.wydawnictwoliteratura.pl/pub/skin/wyd-skin/img/avatar.png'},
      {name: 'Nazarii', id: 5, img: 'https://www.wydawnictwoliteratura.pl/pub/skin/wyd-skin/img/avatar.png'},
      {name: 'Mykhailo', id: 6, img: 'https://www.wydawnictwoliteratura.pl/pub/skin/wyd-skin/img/avatar.png'},
      {name: 'Petro', id: 7, img: 'https://www.wydawnictwoliteratura.pl/pub/skin/wyd-skin/img/avatar.png'}
   ],
   messageData: [
      {id: 1, message: 'Hello. How are you?'},
      {id: 2, message: 'How about your course?'},
      {id: 3, message: 'Studiing goes pretty well'},
      {id: 4, message: 'We\'re going to mountains this weekend. Would you go with us?'}
   ]
}

const dialogesReducer = (state = initialDialoges, action) => {
   
   switch(action.type) {
      case ADD_MESSAGE:
      let newMessage = {
         id: state.dialogesData.length + 1,
         message: action.messageBody
      }
      return {
         ...state,
         messageData: [...state.messageData, newMessage]
      }
      default:
         return state;
   }
}

export const addMessageActionCreator = (messageBody) => ({type: ADD_MESSAGE , messageBody});

export default dialogesReducer;