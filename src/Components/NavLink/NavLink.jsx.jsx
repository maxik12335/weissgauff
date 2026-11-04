import { NavLink as RRNavLink } from 'react-router-dom';
import classes from './NavLink.module.css'

const NavLink = ({ href, children, onClick, className }) => {
  return (
    <RRNavLink to={href} className={`${className ? className : classes.link + ' text-sm hover'}`} onClick={onClick}>
      {children}
    </RRNavLink>
  );
};

export default NavLink;