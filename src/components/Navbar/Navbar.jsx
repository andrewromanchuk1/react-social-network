import { NavLink } from 'react-router-dom';
import navbarCss from './Navbar.module.css';
import Friends from './Friends/Friends';

const Navbar= (props) => {

   return (
      <nav className={navbarCss.nav}>
        <div >
          <NavLink className = { navData => navData.isActive ? navbarCss.active : navbarCss.item }
          to='/profile'>Profile</NavLink>
        </div>
        <div>
          <NavLink className = { navData => navData.isActive ? navbarCss.active : navbarCss.item }
          to='/dialoges'>Messages</NavLink>
        </div>
        <div>
          <NavLink className = { navData => navData.isActive ? navbarCss.active : navbarCss.item }
          to='/news'>News</NavLink>
        </div>
        <div>
          <NavLink className = { navData => navData.isActive ? navbarCss.active : navbarCss.item }
          to='/music'>Music</NavLink>
        </div>
        <div>
          <NavLink className = { navData => navData.isActive ? navbarCss.active : navbarCss.item }
          to='/settings'>Settings</NavLink>
        </div>
        <div>
          <NavLink className = { navData => navData.isActive ? navbarCss.active : navbarCss.item }
          to='/users'>Find Users</NavLink>
        </div>
        <div >
          <h3>Friends</h3>
          <div className={navbarCss.friends__container}>
            <Friends list={props.state.navbarPage.friendsList}/>
          </div>
        </div>
      </nav>
   )
}

export default Navbar;