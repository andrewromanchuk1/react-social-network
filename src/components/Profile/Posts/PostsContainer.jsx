import { connect } from 'react-redux';
import { addPostActionCreator} from '../../../redux/profile-reducer';
import Posts from './Posts';

let mapStateToProps = (state) => {
   return {
      postsData: state.profilePage.postsData,
      textValue: state.profilePage.textValue
   }
}

let mapDispatchToProps = (dispatch) => {
   return {
      addPost: (value) => {
         dispatch(addPostActionCreator(value));
      } 
   }
}

const PostsContainer = connect(mapStateToProps, mapDispatchToProps) (Posts);


export default PostsContainer;

