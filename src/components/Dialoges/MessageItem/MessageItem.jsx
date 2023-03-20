import dialogesCSS from './../Dialoges.module.css';

const MessageItem = (props) => {
   return (
         <p className={dialogesCSS.dialoges_messages__item}>{props.message}</p>
   )
}

export default MessageItem;

//