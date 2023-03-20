import PostElemCSS from './PostElem.module.css'

const PostElem = (props) => {
   return (
      <div>
         <img className={PostElemCSS.item_img} src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png" alt="avatar" />
         <div className={PostElemCSS.item}>{props.message} <span>{props.like} likes</span> </div>
      </div>
   )
}

export default PostElem