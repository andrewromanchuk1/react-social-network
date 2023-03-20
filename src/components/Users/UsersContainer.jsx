import { connect } from 'react-redux';
import Users from './Users';
import React from 'react';
import Preloader from '../common/Preloader/Preloader';
import { toFollow, toUnfollow, isFollowing,getUsersThunkCreator, followThunkCreator, unfollowThunkCreator}
from '../../redux/users-reducer';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { getUsersSelector, getpageSizeSelector, getTotalUsersCountSelector,
   getCurrentPageSelector, getIsFetchingSelector, getFollowingProgressSelector } from '../../redux/users-selectors';


class UsersContainer extends React.Component {
   componentDidMount() {
      this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize); 
   };
   setPage = (page) => {
      this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize, page); 
   };
   render = () => {
      return <>
         {this.props.isFetching === true ? <Preloader /> : 
         <Users 
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            users={this.props.users}
            setPage={this.setPage}
            currentPage={this.props.currentPage}
            isFollowingProgress={this.props.isFollowingProgress}
            followThunkCreator={this.props.followThunkCreator}
            unfollowThunkCreator={this.props.unfollowThunkCreator}
         />}         
      </>
   }         
}
let mapStateToProps = (state) => {
   return {
      users: getUsersSelector(state),
      pageSize: getpageSizeSelector(state),
      totalUsersCount: getTotalUsersCountSelector(state),
      currentPage: getCurrentPageSelector(state),
      isFetching: getIsFetchingSelector(state),
      isFollowingProgress: getFollowingProgressSelector(state)
   }
}

export default compose(connect(mapStateToProps,
   {toFollow, toUnfollow, isFollowing, getUsersThunkCreator,
   followThunkCreator, unfollowThunkCreator}), withAuthRedirect)(UsersContainer);