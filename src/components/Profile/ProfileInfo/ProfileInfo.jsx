import Preloader from '../../common/Preloader/Preloader';
import ProInfoCSS from './ProfileInfo.module.css';
import avatar from '../../../assets/img/users_ava.png';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const ProfileInfo = (props) => {
   if (!props.profile) {
      return <Preloader/>
   } 
   
   return (
      <div className={ProInfoCSS.profileInfo_container}>
         <img className={ProInfoCSS.main_img}
         src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80"/>
         <div className={ProInfoCSS.profile__item}>
            <img className={ProInfoCSS.profile__img} src={props.profile.photos.large ? 
            props.profile.photos.large : avatar}/>
            <p className={ProInfoCSS.profile__name}>{props.profile.fullName}</p>
            <ProfileStatusWithHooks {...props}/>            
         </div>
      </div>
      
   )
}

export default ProfileInfo;