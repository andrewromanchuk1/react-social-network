import NavbarCSS from './../../Navbar.module.css';
import { NavLink } from "react-router-dom"

const friendElem = (props) => {
   return (
      <NavLink className = { navData => navData.isActive ? NavbarCSS.friends_active : NavbarCSS.friends_item } to='/friends'>
         <img className ={NavbarCSS.friends__img} src={props.src}/>
         <span className ={NavbarCSS.friends__text}>{props.name}</span>
      </NavLink>
   )
}

export default friendElem;