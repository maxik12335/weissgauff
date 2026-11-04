import { NavLink } from 'react-router-dom';
import classes from './Catalog.module.css'
import { catalogImages } from '../../assets/catalog/images';
import catalog from '../../data/catalog.json';


const Catalog = () => {
  // объединяем: сначала с подкатегориями, одиночки — вниз
  const sorted = [...catalog].sort((a, b) => b.sub.length - a.sub.length);

  return (
    <div className="section line-dark-section">
      <div className="container">
        <div className="content">

          <h1 className="h2 line-dark-text">каталог</h1>

          <ul className={classes.list}>
            {sorted.map((item) => {
              // индекс картинки берём по позиции в ОРИГИНАЛЬНОМ массиве,
              // чтобы у каждой категории осталась своя фотка
              const index = catalog.indexOf(item);

              return (
                <li key={item.href} className={`${classes.item} bg-color`}>
                  <img
                    className={classes.img}
                    src={catalogImages[index]}
                    alt={item.title}
                  />

                  <NavLink to={item.href} className='text-base bold hover'>
                    {item.title}
                  </NavLink>

                  {item.sub.length > 0 && (
                    <ul className={classes.subList}>
                      {item.sub.map(sub => (
                        <li key={sub.href}>
                          <NavLink
                            to={sub.href}
                            className='text-sm hover'
                          >
                            {sub.title}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>

        </div>
      </div>
    </div>
  );
};

export default Catalog;
