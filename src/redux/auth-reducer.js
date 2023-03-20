import {authAPI} from "../api/api";
import { stopSubmit } from "redux-form";

let SET_USER_DATA = 'SET_USER_DATA';
let RESET_USER_DATA = 'RESET_USER_DATA';

const initialSate = {
   id: null,
   email: null,
   login: null,
   isAuth: false
}

const authReducer = (state = initialSate, action) => {
   
   switch(action.type) {
      case SET_USER_DATA: {
         return {
            ...state,
            ...action.data,
            isAuth: true
         }
      }
      case RESET_USER_DATA: {
         return {
            ...initialSate
         }
      }
      default:
         return state;
   }
}

export const toSetAuthUserData  = (id, email, login) =>
({type: SET_USER_DATA, data: {id, email, login}});

export const toResetAuthUserData  = () => 
({type: RESET_USER_DATA});

export const getLoginThunkCreator = () => async (dispatch) => {
   let data = await authAPI.toGetLogin();   
   if(data.id) {
      dispatch(toSetAuthUserData(data.id, data.email, data.login))
   }   
}
export const toLoginThunkCreator = (email, password, rememberMe = true) => async (dispatch) => {
   let data = await authAPI.toLogin(email, password, rememberMe);
   if(data.resultCode === 0) {
      let data = await authAPI.toGetLogin()
      if(data.id) {
         dispatch(toSetAuthUserData(data.id, data.email, data.login));
      } else {
         dispatch(stopSubmit('loginForm', {_error: data.messages}));
      } 
   }
}
export const toLogoutThunkCreator = () => async (dispatch) => {
   let data = await authAPI.toLogout()
      if(data.resultCode === 0) {
         dispatch(toResetAuthUserData())
      }
}

export default authReducer;