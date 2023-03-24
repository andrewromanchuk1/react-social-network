import postsCss from './Posts.module.css'
import PostElem from './PostElem/PostElem'
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {requiredField, maxLength} from '../../../utils/validators/validators';
import { Textarea } from '../../common/FormControls/FormControls';

const Posts = React.memo(props => {
   const Post = props.postsData.map( p => <PostElem  key={p.id} like={p.likesCount} message={p.message}/>);

   let addPost = (value) => {
      props.addPost(value.postText);
   }

   const AddPostForm = (props) => {
      return (
         <form onSubmit={props.handleSubmit}>
            <div>
               <Field component={Textarea} name={'postText'} validate={[requiredField, maxLength(15)]}/>
            </div>
            <div>
               <button className={postsCss.posts__btn}>Add post</button>
            </div>
      </form>
      )
   }
   const AddPostReduxForm = reduxForm({form: 'editProfile'})(AddPostForm);
   
   return (
      <div className={postsCss.post__item}>
         <AddPostReduxForm onSubmit={addPost}/>
         <p>My posts</p>
         <div className={postsCss.post__new_item}>
         </div>
         <div>
            {Post}
         </div>
      </div>
      )
})

export default Posts;