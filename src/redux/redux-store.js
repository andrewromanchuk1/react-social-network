import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import profileReducer from './profile-reducer'
import dialogesPageReducer from './dialoges-reducer'
import navbarReducer from "./navbar-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import ThunkMiddleware from "redux-thunk";
import {reducer as formReducer} from "redux-form";
import appReducer from "./app-reducer";

const reducers = combineReducers({
   profilePage: profileReducer,
   messagePage: dialogesPageReducer,
   navbarPage: navbarReducer,
   usersPage: usersReducer,
   auth: authReducer,
   form: formReducer,
   app: appReducer
   
});

let store = legacy_createStore(reducers, applyMiddleware(ThunkMiddleware));
window.store = store

export default store;