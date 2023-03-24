import {authAPI, securityAPI} from "../api/api";
import { stopSubmit } from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA';
const RESET_USER_DATA = 'RESET_USER_DATA';
const GET_CAPTCHA_URL = 'GET_CAPTCHA_URL';

const initialSate = {
   id: null,
   email: null,
   login: null,
   isAuth: false,
   captchaUrl: false
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
      case GET_CAPTCHA_URL: {
         return {
            ...initialSate,
            ...action.payload
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

export const toGetCaptchaUrl  = (captchaUrl) => 
({type: GET_CAPTCHA_URL, payload: {captchaUrl}});


export const getLoginThunkCreator = () => async (dispatch) => {
   let data = await authAPI.toGetLogin();   
   if(data.id) {
      dispatch(toSetAuthUserData(data.id, data.email, data.login))
   }   
}
export const toLoginThunkCreator = (email, password, rememberMe = true, captcha) => async (dispatch) => {
   let data = await authAPI.toLogin(email, password, rememberMe, captcha);
   if(data.resultCode === 0) {
      let data = await authAPI.toGetLogin()
      if(data.id) {
         dispatch(toSetAuthUserData(data.id, data.email, data.login));
      }
   } else {
      if(data.resultCode === 10) {
         dispatch(toGetCaptchaThunkCreator());
      }
      let message = data.messages.length > 0 ? data.messages[0] : 'Some error';
      dispatch(stopSubmit('loginForm', {_error: message}));
   } 
}
export const toLogoutThunkCreator = () => async (dispatch) => {
   let data = await authAPI.toLogout()
      if(data.resultCode === 0) {
         dispatch(toResetAuthUserData())
      }
}

export const toGetCaptchaThunkCreator = () => async (dispatch) => {
   let data = await securityAPI.toGetCaptcha();
   const captchaUrl = data.data.url;
   dispatch(toGetCaptchaUrl(captchaUrl));
}

export default authReducer;