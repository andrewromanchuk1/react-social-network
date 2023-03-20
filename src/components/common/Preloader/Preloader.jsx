import preloader_img from '../../../assets/img/preloader.svg'
import style from '../../Users/Users.module.css'
import React from 'react'

let Preloader = () => {
   return (
   <div>
      <img src={preloader_img} className={style.preloader} />
   </div> 
   )
}

export default Preloader;