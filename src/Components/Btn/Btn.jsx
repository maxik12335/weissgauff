// import { useEffect, useState } from "react";
import classes from "./Btn.module.css"


// const Navbar = ({navColor, textColor}) => {
const Btn = ({children}) => {

  return (
    <div className={`${classes.button} text-sm`}>
      {children}
    </div>
  )
}

export default Btn;