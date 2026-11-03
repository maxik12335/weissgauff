import classes from "./Navbar.module.css"
import { useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import NavLink from "../NavLink/NavLink.jsx";
import CitySelector from "../CitySelector/CitySelector.jsx";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { title: 'бренд', href: '#uslugy' },
    { title: 'каталог', href: '#price' },
    { 
      type: 'dropdown', 
      title: 'сервис и гарантия', 
      links: [
        "доставка", "оплата", "важная информация", "условия гарантии", 
        "заявка на сервисное обслуживание", "заявка на заказ запасных частей", 
        "заявка на техническую консультацию", "форма для обращения оптовых покупателей", 
        "установка техники", "заявка на возврат товара", "часто задаваемые вопросы", 
        "дополнительный год гарантии на технику Weissgauff"
      ] 
    },
    { title: 'контакты', href: '#contacts' },
    { 
      type: 'dropdown', 
      title: 'другое', 
      links: ["шоурумы", "пункты выдачи", "франшиза"] 
    },
    { title: 'личный кабинет', href: '#contacts' }
  ];
  
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
            <p className="text-base">Weissgauff</p>
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
          <p className="text-base">Weissgauff</p>
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
            <p className="text-base">Weissgauff</p>

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