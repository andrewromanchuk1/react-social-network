import FriendElem from './friendElem/friendElem'
import NavbarCSS from './../Navbar.module.css';

const Friends = (props) => {

   const friendsList = props.list.map (f => <FriendElem src={f.img} key={f.id++} name={f.name}/>)
   
   return (
      <div className={NavbarCSS.friends__container}>
         {friendsList}
      </div>
   )
}

export default Friends;

/*<NavLink className = { navData => navData.isActive ? NavbarCSS.friends_active : NavbarCSS.friends_item } to='/friends'>
            <img className ={NavbarCSS.friends__img} src={f.img}/>
            <span className ={NavbarCSS.friends__text}>{f.name}</span>
         </NavLink>
*/