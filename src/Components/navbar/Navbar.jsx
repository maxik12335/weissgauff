import classes from "./Navbar.module.css"
import { useState } from "react";
import Dropdown from "../Dropdown/Dropdown.jsx";
import NavLink from "../NavLink/NavLink.jsx";
import CitySelector from "../CitySelector/CitySelector.jsx";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    // Главные кнопки (просто href)
    { title: 'бренд', href: '/brand' },
    { title: 'каталог', href: '/catalog' },

    // Выпадашка 1 (массив объектов {name, href})
    { 
      type: 'dropdown', 
      title: 'сервис и гарантия', 
      links: [
        { name: 'доставка', href: '/delivery' },
        { name: 'оплата', href: '/payment' },
        { name: 'важная информация', href: '/info' },
        { name: 'условия гарантии', href: '/warranty-terms' },
        { name: 'заявка на сервисное обслуживание', href: '/service-request' },
        { name: 'заявка на заказ запасных частей', href: '/parts-request' },
        { name: 'заявка на техническую консультацию', href: '/tech-consult' },
        { name: 'форма для обращения оптовых покупателей', href: '/wholesale-form' },
        { name: 'установка техники', href: '/installation' },
        { name: 'заявка на возврат товара', href: '/return-request' },
        { name: 'часто задаваемые вопросы', href: '/faq' },
        { name: 'дополнительный год гарантии на технику Weissgauff', href: '/extended-warranty' }
      ] 
    },

    // Главные кнопки
    { title: 'контакты', href: '/contacts' },

    // Выпадашка 2
    { 
      type: 'dropdown', 
      title: 'другое', 
      links: [
        { name: 'шоурумы', href: '/showrooms' },
        { name: 'пункты выдачи', href: '/pickup-points' },
        { name: 'франшиза', href: '/franchise' }
      ] 
    },

    // Главная кнопка
    { title: 'личный кабинет', href: '/login' }
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