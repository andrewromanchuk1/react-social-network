import style from './Users.module.css';
import userAvatar from '../../assets/img/users_ava.png';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Users = (props) => {   
   let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);
   let pages = [];
   for(let i=1; i<=pageCount; ++i) {
      pages.push(i)
   }
   const portionSize = 10;
   let portionCount = Math.ceil(pageCount / portionSize);
   let [portionNumber, setPortionNumber] = useState(1);
   let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
   let rightPortionPageNumber = portionNumber * portionSize;

   return (
      <div className={style.users__container}>   
         <div className={style.users__pages}>
            {portionNumber > 1 ? <button className={style.pages__btn} onClick={() =>
            {setPortionNumber(portionNumber - 1)}}>⇦</button>: null}
         {pages
         .filter(p=>p >= leftPortionPageNumber && p<= rightPortionPageNumber)
         .map(p => {
               return <span className={props.currentPage === p ? style.current : style.notCurrent}
               onClick={() => {props.setPage(p)}} key={p}>{p}</span>
            })}            
            {portionCount > portionNumber ? <button className={style.pages__btn} onClick={() => 
            {setPortionNumber(portionNumber + 1)}}>⇨</button>: null}
                        
         </div>
         <div className={style.users__item_container}>{props.users.map(u => 
            <div key={u.id}>
               <span>
                  <div>
                     <NavLink to={'/profile/' + u.id}>
                        <img src={u.photos.small ? u.photos.small : userAvatar} className={style.users__img}/>
                     </NavLink>
                  </div>
                  <div>
                     {u.followed ?
                     <button className={style.users__item_btn}
                     disabled={props.isFollowingProgress.some(id=> id === u.id)}
                     onClick = { () => {props.unfollowThunkCreator(u.id)}}>Unsubscribe</button> :
                     <button className={style.users__item_btn}
                     disabled={props.isFollowingProgress.some(id=> id === u.id)}
                     onClick={ () => {props.followThunkCreator(u.id)}}>Subscribe</button>}
                  </div>
               </span>
               <span>
                  <span>
                     <div>{u.name}</div>
                     <div>{u.status}</div>
                  </span>
                  <span>
                     <div>{'u.location.country'}</div>
                     <div>{'u.location.city'}</div>
                  </span>
               </span>
            </div>)}
         </div>
      </div>
   )   
}

export default Users;

