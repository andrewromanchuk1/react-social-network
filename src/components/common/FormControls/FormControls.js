import styles from './FormControl.module.css'

export const Textarea = ({input, meta, ...props}) => {
   const error = meta.touched && meta.error;
   return (
      <div className={styles.form_container}>
         <textarea className={!error ? styles.form_area : styles.form_area + ' ' + styles.form_area__error} 
         {...input} {...props}/>
         {error ? <p className={styles.form_error}>{meta.error}</p> : undefined}
      </div>
   )
}

export const Input = ({input, meta, ...props}) => {
   const error = meta.touched && meta.error;
   return (
      <div className={styles.form_container}>
         <input className={!error ? styles.form_area : styles.form_area + ' ' + styles.form_area__error} 
         {...input} {...props}/>
         {error ? <p className={styles.form_error}>{meta.error}</p> : undefined}
         
      </div>
   )
}