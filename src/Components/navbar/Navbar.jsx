import classes from "./Navbar.module.css"
import { useState } from "react";
import Dropdown from "../Dropdown/Dropdown.jsx";
import NavLink from "../NavLink/NavLink.jsx";
import CitySelector from "../CitySelector/CitySelector.jsx";
import menuItems from "../../data/menu.json";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const closeMobyleMenu = () => {
    setIsOpen(false);
  }


  return (
    <div className={`${classes.navbar} line-dark-section`}>
      <div className="container-navbar">

        {/* ======= меню desctop ======= */}
        <div className={classes.desctopMenu}>
            
          <div className={classes.leftSide}>
            <CitySelector />
            <NavLink href={'/'} className="text-base">Weissgauff</NavLink>
          </div>


          <div className={classes.menu}>
            {menuItems.map((item, index) => {
              if (item.type === 'dropdown') {
                return <Dropdown key={index} title={item.title} links={item.links} />;
              }
              return ( 
                <NavLink
                  key={index}
                  href={item.href}
                >
                  {item.title}
                </NavLink>
              );
            })}
          </div>

          <div className={classes.telBox}>
            <a className="text-sm hover" href="tel:+74951085386">8 495 108 53 86</a>
            <a className="text-sm hover" href="tel:+79292947270">заказать звонок</a>
          </div>
        </div>

        {/* ======= burger ======= */}
        <div className={classes.burgerMenu}>
          <NavLink href={'/'} className="text-base">Weissgauff</NavLink>
          <div className={classes.burger} onClick={() => setIsOpen(true)}>
            <span ></span>
            <span ></span>
            <span ></span>
          </div>
        </div>

        {/* ======= меню mobyle ======= */}
        <div 
          className={`${classes.mobyleMenu} ${isOpen ? classes.isOpen : ''}`}
          
        >
          <div className={classes.top}>
            <NavLink href={'/'} className="text-base" onClick={() => setIsOpen(false)}>Weissgauff</NavLink>

            <div className={classes.close} onClick={() => setIsOpen(false)}>
              <span ></span>
              <span ></span>
            </div>
          </div>

          <CitySelector />

          <div className={classes.menu}>
            {menuItems.map((item, index) => {
              if (item.type === 'dropdown') {
                return <Dropdown key={index} title={item.title} links={item.links} closeMobyleMenu={closeMobyleMenu}/>;
              }
              return ( 
                <NavLink
                  key={index}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                >
                  {item.title}
                </NavLink>
              );
            })}
          </div>

          <div className={classes.telBox}>
            <a className="text-sm hover" href="tel:+74951085386">8 495 108 53 86</a>
            <a className="text-sm hover" href="tel:+79292947270">заказать звонок</a>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Navbar;