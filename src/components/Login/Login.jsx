import { Navigate } from "react-router-dom"
import { Field, reduxForm } from "redux-form"
import { Input } from "../common/FormControls/FormControls";
import { requiredField, maxLength } from "../../utils/validators/validators";
import { connect } from "react-redux";
import { toLoginThunkCreator, getLoginThunkCreator } from "../../redux/auth-reducer";
import style from '../common/FormControls/FormControl.module.css'

const LoginForm = (props) => {
   return (   
      <form onSubmit={props.handleSubmit}>
         <div>
            <Field component={Input} placeholder={"Login"} name={"email"} validate={[requiredField, maxLength(30)]}/>
         </div>
         <div>
            <Field component={Input} placeholder={"Password"} name={"password"} type={'password'}
            validate={[requiredField, maxLength(30)]}/>
         </div>
         {props.error && <div className={style.login_error__container}>
            <span className={style.login_error}>{props.error}</span>
         </div>}
         <div>
            <Field component={Input} label='' type={"checkbox"} name={"rememberMe"}/>Remember me
         </div>
         <div>
            {props.captchaUrl && <img className={style.login__captcha_img} src={props.captchaUrl} />}
            {props.captchaUrl && <Field component={Input}  name={"captcha"} validate={[requiredField]} />}
         </div>         
         <div>
            <button>Login</button>
         </div>
         
      </form>
   )
}

const LoginReduxForm = reduxForm({form: 'loginForm'})(LoginForm);

const Login = (props) => {
   const toLogin = (data) => {
      props.toLoginThunkCreator(data.email, data.password, true, data.captcha);
   }
   if(props.isAuth) {
      return <Navigate to='/profile'/>
   }
   return (
      <div className={style.login__container}>
         <h1>Please, login</h1>
         <LoginReduxForm onSubmit={toLogin} captchaUrl={props.captchaUrl}/>
      </div>
   )
}

const mapStateToProps= (state) => ({
   isAuth: state.auth.isAuth,
   captchaUrl: state.auth.captchaUrl
})

export default connect(mapStateToProps, {toLoginThunkCreator, getLoginThunkCreator})(Login)