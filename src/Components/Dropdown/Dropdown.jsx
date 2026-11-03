import { useState } from "react";
import classes from "./Dropdown.module.css";

const Dropdown = ({ title, links, closeMobyleMenu }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleItemClick = () => {
    setIsOpen(false);
    closeMobyleMenu();
  };

  return (
    <div className={classes.dropdown}>
      {/* Заголовок */}
      <a 
        className={`${classes.link} text-sm hover`}
        onClick={(e) => {
          e.preventDefault();
          setIsOpen(!isOpen);
        }}
        href="#"
      >
        {title} <span className="arrow"></span>
      </a>
      
      {/* Контент */}
      <div className={`${classes.dropdownContent} ${isOpen ? classes.open : ''}`}>
        {links.map((item, index) => (
          <a 
            key={index}
            className={`${classes.item} text-sm hover-bg hover`}
            href="#"
            onClick={handleItemClick}
          >
            {item}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;