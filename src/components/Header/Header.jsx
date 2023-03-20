import styles from './Header.module.css'

const Header= (props) => {
   return (
      <header className={styles.header}>
         <div className={styles.header__container}>
            <a href='/profile'>
               <img className={styles.header__img}
               src='https://findvectorlogo.com/wp-content/uploads/2018/12/quartz-vector-logo.png'/>
            </a>
            {props.isAuth ? 
            <div>
               <span className={styles.header__login}>{props.login}</span>
               <button onClick={props.toLogoutThunkCreator} className={styles.header__logout}>Log out</button>
            </div> :
            <a className={styles.header__login} href='/login'>Login</a>}
         </div>
         
      </header>
   )
}

export default Header;