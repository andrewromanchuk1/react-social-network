import React from "react";
import { connect } from "react-redux";
import Login from "./Login";

class LoginContainer extends React.Component {
   render() {
      return <Login/>
   }
}
const mapStateToProps = (state) => {
   return {
      isAuth: state.auth.isAuth
   }
}

export default connect(mapStateToProps, {})(LoginContainer);