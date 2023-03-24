import Preloader from '../../common/Preloader/Preloader';
import ProInfoCSS from './ProfileInfo.module.css';
import avatar from '../../../assets/img/users_ava.png';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import ProfileDataReduxForm from './ProfileDataForm';
import { useState } from 'react';

const ProfileInfo = (props) => {
   let [editMode, setEditMode] = useState(false);
   let isOwner = props.router.params.userID;

   if (!props.profile) {
      return <Preloader/>
   }
   const addImage = (e) => {
      if(e.target.files.length) {
         props.addImageThunkCreator(e.target.files[0]);
      }
   }   
   const onSubmit = (data) => {
      props.saveProfileThunkCreator(data)
         .then( () => {
            setEditMode(false);
         })
      
   }
   return (
      <div className={ProInfoCSS.profileInfo_container} >
         <img className={ProInfoCSS.main_img}         
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80"/>
         <div className={ProInfoCSS.profile__item}>
            <img className={ProInfoCSS.profile__img} src={props.profile.photos.large || avatar}/>
            { !props.isOwner ? <input onChange={addImage} type={'file'}/> : null }
            
            <ProfileStatusWithHooks {...props}/>
            {editMode ? <ProfileDataReduxForm initialValues={props.profile} onSubmit={onSubmit} deactivateEditMode={() =>{setEditMode(false)}} {...props} /> :
            <ProfileData {...props} activateEditMode={() =>{setEditMode(true)}} 
            isOwner={isOwner} />}
         </div>         
      </div>      
   )
}

const ProfileData = (props) => {  
   return (
      <div >
         <div>
            <p className={ProInfoCSS.profile__name}>{props.profile.fullName}</p>
         </div>           
         <div>
            <span className={ProInfoCSS.profile__span}>
               <span>Looking for a job: </span>
               <span  className={ProInfoCSS.profile__span_value }>{props.profile.lookingForAJob ? ' Yes' : ' No'}</span></span>
         </div>
         <div>
            <span className={ProInfoCSS.profile__span}>My professional skills: 
            <span className={ProInfoCSS.profile__span_value}>{props.profile.lookingForAJobDescription}</span></span>
         </div>
         <div>
            <span className={ProInfoCSS.profile__span}>About me:  
            <span className={ProInfoCSS.profile__span_value }> {props.profile.aboutMe}</span></span>
         </div>                       
         <div>
            <span className={ProInfoCSS.profile__span}>Contacts: {Object.keys(props.profile.contacts).map(key => {
               if(key === 'vk' || key === 'mainLink') {
                  return null
               }
               return <Contact  key={key} contactTitle={key} contactValue={props.profile.contacts[key]}/>
            })}</span>
         </div>
         { !props.isOwner ? <div><button className={ProInfoCSS.profile__btn}
         onClick={props.activateEditMode}>edit</button></div> : null }                     
      </div>
   )
}
export const Contact = ({contactTitle, contactValue}) => {
   return <div className={ProInfoCSS.profile__contacts_keys}>{contactTitle}: 
   <span className={ProInfoCSS.profile__span_value }> {contactValue}</span></div>
}

export default ProfileInfo;