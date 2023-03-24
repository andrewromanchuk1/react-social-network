import {profileAPI} from "../api/api";
import { stopSubmit } from "redux-form";

const ADD_POST = 'ADD-POST';
const ADD_PROFILE_PAGE = 'ADD-PROFILE-PAGE';
const SET_STATUS = 'SET_STATUS';
const SET_IMAGE = 'SET_IMAGE';

const initialProfile = {
   postsData: [
      {id: 1, likesCount: 12, message: 'Hi, how are you?'},
      {id: 2, likesCount: 9, message: 'Good, thank you. How is your mood today?'},
      {id: 3, likesCount: 22, message: 'Great! What can you say about last course?'},
      {id: 4, likesCount: 14, message: 'For me it\'s more than imformative. I can confidently advise it.'},
      {id: 5, likesCount: 17, message: 'That sounds great! Glad that you like it.'}
    ],
    status: ''
}

const profileReducer = (state = initialProfile, action) => {
   switch(action.type) {
      case ADD_POST:
      let newPost = {
         id: state.postsData.length + 1,
         likesCount: 14,
         message: action.value
      }
      return {
         ...state,
         postsData: [...state.postsData, newPost]
      }
      case ADD_PROFILE_PAGE: 
      return {
         ...state,
         profile: action.profile,
      }
      case SET_STATUS:
      return {
         ...state,
         status: action.status,
      }
      case SET_IMAGE:
         return {
            ...state,
            profile: {...state.profile, photos: action.image}
         }
      default:
         return state;
   }
}

export const addPostActionCreator = (value) => ({type: ADD_POST, value});
export const toSetProfilePage = (profile) => ({type: ADD_PROFILE_PAGE, profile});
export const toSetStatus = (status) => ({type: SET_STATUS, status});
export const toSetImage = (image) => ({type: SET_IMAGE, image});

export const profileThunkCreator = (userId) => async (dispatch) =>{   
   const data = await profileAPI.getProfile(userId)
   if(data) {
      dispatch(toSetProfilePage(data))
   }        
}

export const getStatusThunkCreator = (userId) => {
   return async (dispatch) => {
      let data = await profileAPI.getStatus(userId);
      dispatch(toSetStatus(data));
   }
}
export const updateStatusThunkCreator = (status) => {
   return async (dispatch) => {
      let data = await profileAPI.setStatus(status);
      if(data.resultCode === 0) {
         dispatch(toSetStatus(status))
      }     
   }
}
export const addImageThunkCreator = (image) => {
   return async (dispatch) => {
      let data = await profileAPI.setImage(image);
      if(data.resultCode === 0) {
         dispatch(toSetImage(data.data.photos));
      }
   }
}

export const saveProfileThunkCreator = (profile) => async (dispatch, getState) => {
   const userId = getState().auth.id;
   const data = await profileAPI.setProfile(profile);
   if(data.resultCode === 0) {
      const data = await profileAPI.getProfile(userId)
      if(data) {
         dispatch(toSetProfilePage(data))
      }              
   } else {
      let message = data.messages.length > 0 ? data.messages[0] : 'Some error';
      dispatch(stopSubmit('setProfile', {_error: message}));
      return Promise.reject(message);
   }
}


export default profileReducer; 