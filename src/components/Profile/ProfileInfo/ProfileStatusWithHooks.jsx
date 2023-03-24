import React, { useState, useEffect } from 'react';
import ProInfoCSS from './ProfileInfo.module.css';

const ProfileStatusWithHooks = (props) => {
   let [editMode, setEditMode] = useState(false);
   let [status, setStatus] = useState(props.status);

   const activateMode = () => {
      setEditMode(true)
   }
   const deactivateMode = () => {
      setEditMode(false);
      props.updateStatusThunkCreator(status);
   }
   const onStatusChange = (e) => {
         setStatus(e.currentTarget.value);
   }
   useEffect( () => {
      setStatus(props.status)
   }, [props.status])
 
   return  (
      <div className={ProInfoCSS.profile__status_container}>
         <span className={ProInfoCSS.profile__about_status}>Status:</span>
         {editMode ? <input value={status} onChange={onStatusChange} onBlur={deactivateMode} autoFocus={true}></input> :
         <span onDoubleClick={activateMode} className={ProInfoCSS.profile__status}>{props.status || 'no status'}</span>}
      </div>
   )
}

export default ProfileStatusWithHooks;