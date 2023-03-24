import ProInfoCSS from './ProfileInfo.module.css';
import { Field } from 'redux-form';
import { Input, Textarea } from '../../common/FormControls/FormControls';
import {reduxForm} from 'redux-form';

const ProfileDataForm = (props) => {
   return (
      <form onSubmit={props.handleSubmit}>
         {props.error && <span className={ProInfoCSS.profile__error}>{props.error}</span>}
         <div>
            <p className={ProInfoCSS.profile__span}>Full name:</p>
            <Field component={Textarea} placeholder={"Full name"} name={"fullName"}/>
         </div>      
         <div>
            <p className={ProInfoCSS.profile__span}>Looking for a job:</p>
            <Field component={Input} type={'checkbox'} placeholder={"Looking for a job?"} name={"lookingForAJob"}/>
         </div>
         <div>
            <p className={ProInfoCSS.profile__span}>My professional skills:</p>
            <Field component={Input} placeholder={"Professional skills"} name={"lookingForAJobDescription"}/>
         </div>
         <div>
            <p className={ProInfoCSS.profile__span}>About me:</p>
            <Field component={Textarea} placeholder={"Tell us smth about you"} name={"aboutMe"}/>
         </div>
         <div>
            <span className={ProInfoCSS.profile__span}>Contacts: {Object.keys(props.profile.contacts).map(key => {
               if(key === 'vk' || key === 'mainLink') {
                  return null
               }
               return (
                  <div>
                     <p className={ProInfoCSS.profile__span}>{key}:</p>
                     <Field component={Input} placeholder={`Your ${key}`} name={`contacts.`+key}/>
                  </div>                  
               )})}
            </span>
         </div>
         { !props.isOwner ? <div><button className={ProInfoCSS.profile__btn} >Save</button></div> : null }
      </form>
   )
}

const ProfileDataReduxForm = reduxForm({form: 'setProfile', enableReinitialize: true, destroyOnUnmount: false })(ProfileDataForm);

export default ProfileDataReduxForm;