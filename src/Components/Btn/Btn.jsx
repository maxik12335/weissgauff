import classes from "./Btn.module.css"

const Btn = ({children, className}) => {

  return (
    <div className={`${classes.button} ${className ? className : ''} text-sm`}>
      {children}
    </div>
  )
}

export default Btn;