import Navbar from './Navbar';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
   return {
      state: state
   }
}

const NavbarContainer = connect(mapStateToProps) (Navbar);

export default NavbarContainer;