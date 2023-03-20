import { NavLink } from 'react-router-dom';
import dialogesCSS from './../Dialoges.module.css';

const DialogItem = (props) => {
   let path = '/dialoges/' + props.id;
   return (
         <NavLink to={path} 
         className={ NavClass => NavClass.isActive ? dialogesCSS.dialoges_list__item_active : 
         dialogesCSS.dialoges_list__item }>
               <img className={dialogesCSS.dialoges_list__img} src={props.url}/>
               <span className={dialogesCSS.dialoges_list__name}>{props.name}</span>
         </NavLink>
   )
}

export default DialogItem;