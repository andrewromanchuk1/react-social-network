import usersAPI from "../api/api";

let FOLLOW = 'FOLLOW';
let UNFOLLOW = 'UNFOLLOW';
let SET_USERS = 'SETUSERS';
let SET_PAGE = 'SETUPAGE';
let SET_PAGE_AMOUNT = 'SETUPAGEAMOUNT';
let TOGGLE_IS_FETCHING = 'TOGGLEISFETCHING';
let TOGGLE_IS_FOLLOWING = 'TOGGLE_IS_FOLLWING';

const initialSate = {
   usersData: [
      /*
         {id:1,
         imgUrl:'https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png',
         followed: true, fullName: 'Pan Roman', status: 'I\'m a boss',
         location: {city:'Lviv', country: 'Ukraine'}},
         {id:2,
         imgUrl:'https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png',
         followed: true, fullName: 'Pan Mykhailo', status: 'Hello, fellas',
         location: {city:'Sambir', country: 'Ukraine'}},
         {id:3,
         imgUrl:'https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png',
         followed: false, fullName: 'Pan Zenovii', status: 'Give me your money',
         location: {city:'Strii', country: 'Ukraine'}},
         {id:4,
         imgUrl:'https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png',
         followed: false, fullName: 'Pan Stepan', status: 'Glory to Ukraine',
         location: {city:'Zhovkva', country: 'Ukraine'}}
         */
   ],
   pageSize: 10,
   totalUsersCount: 0,
   currentPage: 1,
   isFetching: false,
   isFollowingProgress: []
}

const usersReducer = (state = initialSate, action) => {
   switch(action.type) {
      case FOLLOW: {
         return {
            ...state,
            usersData: state.usersData.map(u => {
               return (action.userId === u.id ?
                {...u, followed: true} : u);
            })
         }
      }; 
      case UNFOLLOW: {
         return {
            ...state,
            usersData: state.usersData.map(u => {
               return (action.userId === u.id ?
                {...u, followed: false} : u);
            })
         }
      }; 
      case SET_USERS: {
         return {
            ...state,
            usersData: [...action.users]
         }
      };
      case SET_PAGE: {
         return {
            ...state,
            currentPage: action.pageNumber
         }
      };
      case SET_PAGE_AMOUNT: {
         return {
            ...state,
            totalUsersCount: action.totalUsers
         }
      };
      case TOGGLE_IS_FETCHING: {
         return {
            ...state,
            isFetching: action.isFetching
         }
      };
      case TOGGLE_IS_FOLLOWING: {
         return {
            ...state,
            isFollowingProgress: action.isFollowing ? 
            [...state.isFollowingProgress, action.userID]
            : state.isFollowingProgress.filter(id => action.userID !== id)
         }
      }
      default:
         return state;
   }
}

export const toFollow = (userId) => ({type: FOLLOW, userId: userId});
export const toUnfollow = (userId) => ({type: UNFOLLOW, userId: userId});
export const toSetUsers = (users) => ({type: SET_USERS, users: users});
export const toSetPage = (pageNum) => ({type: SET_PAGE, pageNumber: pageNum});
export const toSetUsersAmount = (users) => ({type: SET_PAGE_AMOUNT, totalUsers: users});
export const toFetch = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching: isFetching});
export const isFollowing = (isFollowing, userID) => ({type: TOGGLE_IS_FOLLOWING, isFollowing, userID});

export const getUsersThunkCreator = (currentPage, pageSize, page=currentPage) => {
   return async (dispatch) => {
      dispatch(toSetPage(page));
      dispatch(toFetch(true));
      let data = await usersAPI.getUsers(page, pageSize);
      dispatch(toSetUsers(data.items));
      dispatch(toSetUsersAmount(data.totalCount));
      dispatch(toFetch(false));
            
   }
}
export const followThunkCreator = (userId) => {
   return async (dispatch) => {
      dispatch(isFollowing(true, userId))
      let data = await usersAPI.toFollow(userId)
      if(data.resultCode === 0) {
         dispatch(toFollow(userId));
         dispatch(isFollowing(false, userId));
      }
   }
}

export const unfollowThunkCreator = (userId) => {
   return async (dispatch) => {
      dispatch(isFollowing(true, userId));
      let data = await usersAPI.toUnfollow(userId);
      if(data.resultCode === 0) {
         dispatch(toUnfollow(userId));
         dispatch(isFollowing(false, userId));
      }
   }
}

export default usersReducer;