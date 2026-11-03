import classes from './NavLink.module.css'

const NavLink = ({ href, children, onClick }) => {
  return (
    <a href={href} className={`${classes.link} text-sm hover`} onClick={onClick}>
      {children}
    </a>
  );
};

export default NavLink;