import { useState } from "react";
import { NavLink } from 'react-router-dom';
import classes from "./Dropdown.module.css";

const Dropdown = ({ title, links, closeMobyleMenu }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleItemClick = () => {
    setIsOpen(false);
    if (closeMobyleMenu) {
      closeMobyleMenu();
    }
  };

  return (
    <div className={classes.dropdown}>
      {/* Заголовок */}
      <div 
        className={`${classes.link} text-sm hover`}
        onClick={(e) => {
          e.preventDefault();
          setIsOpen(!isOpen);
        }}
      >
        {title} <span className="arrow"></span>
      </div>
      
      {/* Контент */}
      <div className={`${classes.dropdownContent} ${isOpen ? classes.open : ''}`}>
        {links.map((item, index) => (
          <NavLink
            key={index}
            className={`${classes.item} text-sm hover-bg`}
            to={item.href}
            onClick={handleItemClick}
          >
            {item.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;