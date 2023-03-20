import { getLoginThunkCreator } from "./auth-reducer";

const SET_INITIALIZED = 'SET_INITIALIZED';

const initialSate = {
   initialized: false
}

const appReducer = (state= initialSate, action) => {
   switch(action.type) {
      case SET_INITIALIZED: 
         return {
            ...state,
            initialized: true
         }
         default:
            return state;
   }
}

export const initializedSuccess = () => ({type: SET_INITIALIZED});

export const initializeApp = () => async (dispatch) => {
   await dispatch(getLoginThunkCreator());
   dispatch(initializedSuccess());   
}

export default appReducer;