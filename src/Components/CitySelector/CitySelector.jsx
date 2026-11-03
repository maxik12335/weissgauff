// components/CitySelector.jsx
import { useState } from "react";
import classes from "../navbar/Navbar.module.css";

const CitySelector = () => {
  const [isOpenCity, setIsOpenCity] = useState(false);
  const [selectedCity, setSelectedCity] = useState('Москва');

  const renderCityList = () => (
    <ul className={classes.cityList}>
      <li
        className={`${classes.cityItem} text-sm hover-bg`}
        onClick={(e) => {   
          e.preventDefault();
          setSelectedCity("Москва");
          setIsOpenCity(false);
        }}
      >
        Москва
      </li>
      <li
        className={`${classes.cityItem} text-sm hover-bg`}
        onClick={(e) => {
          e.preventDefault();
          setSelectedCity("Санкт-Петербург");
          setIsOpenCity(false);
        }}
      >
        Санкт-Петербург
      </li>
    </ul>
  );

  return (
    <div className={classes.cityDropdown}>
      <button
        onClick={() => setIsOpenCity(!isOpenCity)}
        className={classes.cityBtn}
        aria-expanded={isOpenCity}
      >
        {selectedCity} <span className="arrow"></span>
      </button>

      {isOpenCity && renderCityList()}
    </div>
  );
};

export default CitySelector;