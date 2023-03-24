import React from "react";
import {connect} from "react-redux";
import Profile from "./Profile";
import {profileThunkCreator, getStatusThunkCreator,
  updateStatusThunkCreator, addImageThunkCreator, saveProfileThunkCreator} from '../../redux/profile-reducer'
import {useLocation, useNavigate, useParams} from "react-router-dom";
import { compose } from "redux";

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
      let location = useLocation();
      let navigate = useNavigate();
      let params = useParams();
      return (
          <Component
              {...props}
              router={{ location, navigate, params }}
          />
      );
  }
  return ComponentWithRouterProp;
}

class ProfileContainer extends React.Component {
  refreshProfile() {
    let userID = this.props.router.params.userID;
    if(!userID) {
      userID = this.props.loginnedUserId
    }
    if(!userID) {
      userID = 28131;
    }
    this.props.profileThunkCreator(userID);
    this.props.getStatusThunkCreator(userID);
  }
  componentDidMount() {
    this.refreshProfile();
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    if(this.props.router.params.userID != prevProps.router.params.userID) {
      this.refreshProfile();
    }
  }
  render() {
    return (
      <div>
        <Profile {...this.props}/>
      </div>
     )
  };
}

const mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    loginnedUserId: state.auth.id    
  }  
};

export default compose(connect(mapStateToProps, {profileThunkCreator, getStatusThunkCreator,
  updateStatusThunkCreator, addImageThunkCreator, saveProfileThunkCreator}), withRouter)(ProfileContainer);