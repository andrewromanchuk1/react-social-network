import React from 'react';
import dialogesCSS from './Dialoges.module.css';
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './MessageItem/MessageItem';
import { Field, reduxForm } from 'redux-form';
import { Textarea } from '../common/FormControls/FormControls';
import { maxLength, requiredField } from '../../utils/validators/validators';

const Dialoges = (props) => {
   const DialogeElem = props.messagePage.dialogesData.map( d =>
   <DialogItem key={d.id} name={d.name} id={d.id} url={d.img}/>)
   const MessageElem = props.messagePage.messageData.map( m =>
   <MessageItem ket={m.id} message={m.message} id={m.id}/>)

   let addNewMessage = (value) => {
      props.onAddMessage(value.addMessage);
   }
   const AddMessageForm = (props) => {
      return (
         <form onSubmit={props.handleSubmit}>
            <Field component={Textarea} name={'addMessage'} validate={[requiredField, maxLength(10)]}></Field>
            <button className={dialogesCSS.message_btn}>Send</button>
         </form>
      )
   }

   const AddMessageReduxForm = reduxForm({form: 'addMessageForm'})(AddMessageForm);
   
   return (
      <div className={dialogesCSS.dialoges}>
         <div className={dialogesCSS.dialoges_list}>
            <h2 className={dialogesCSS.dialoges_list__title}>Dialoges</h2>
            {DialogeElem}
         </div>
         <div className={dialogesCSS.dialoges_messages}>
            {MessageElem}
            <AddMessageReduxForm onSubmit={addNewMessage}/>
         </div>         
      </div>
   )
}

export default Dialoges;