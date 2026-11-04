import { useLocation, NavLink } from 'react-router-dom';
import Btn from '../../Components/Btn/Btn'
import classes from './CatalogPage.module.css';
import catalog from '../../data/catalog.json';
import productsData from '../../data/products.json'; // <-- импорт товаров

const CatalogPage = () => {
  const { pathname } = useLocation();

  // 1. Находим категорию
  const currentCategory = catalog.find(item => item.href === pathname);

  let currentSub = null;
  if (!currentCategory) {
    const parent = catalog.find(item =>
      item.sub.some(sub => sub.href === pathname)
    );
    if (parent) {
      currentSub = parent.sub.find(sub => sub.href === pathname);
      return renderPage(parent, currentSub);
    }
    return renderNotFound();
  }

  return renderPage(currentCategory, null);
};

const renderPage = (category, sub) => {
  // 2. Определяем ключ категории для товаров (например, "ovens", "vacuums")
  // Если у тебя в JSON ключи — это slug, то можно брать из href: /catalog/ovens → ovens
  const categoryKey = category.href.replace('/catalog/', '');
  const items = productsData[categoryKey] || [];
  console.log(items)

  return (
    <div className="section line-dark-section">
      <div className="container">
        <div className="content">

          {/* хлебные крошки */}

          <div className={classes.breadcrumbs}>
            <NavLink to="/catalog" className="text-sm hover">каталог</NavLink>
            {sub && (
              <>
                <span className="text-sm">&nbsp;/&nbsp;</span>
                <NavLink to={category.href} className="text-sm hover">{category.title}</NavLink>
              </>
            )}
          </div>

          <h1 className="h2 line-dark-text">{sub ? sub.title : category.title}</h1>

          {/* подкатегории */}

          {!sub && category.sub.length > 0 && (
            <ul className={classes.subList}>
              {category.sub.map(item => (
                <li key={item.href}>
                  <NavLink to={item.href} className="text-base hover">{item.title}</NavLink>
                </li>
              ))}
            </ul>
          )}

          {/* список товаров */}

          <ul className={classes.products}>
            {items.length === 0 ? (
              <li colSpan="3" className={classes.empty}>В этой категории пока нет товаров</li>
            ) : (
              items.map(product => (
                <li key={product.id} className={`${classes.product} bg-color`}>
                  <div className={classes.top}>
                    <div className={classes.imgBox} style={{ backgroundImage: `url(${product.image})` }} />

                    <div className={classes.topBody}>
                      <h3 className={`${classes.title} h3 bold line-dark-text`}>
                        {product.title}
                      </h3>

                      {/* Рейтинг и отзывы */}

                      <div className={classes.priceRating}>
                        <div className={classes.rating}>
                          <p className="text-base bold">{product.rating}</p>
                          <p className='text-base'> ({product.reviewsCount} отзывов)</p>
                        </div>

                        <p className="text-base">{product.price}</p>
                      </div>

                      <Btn className={`${classes.btn} btn-fon-bg`}>купить</Btn>

                    </div>
                  </div>

                  <div className={classes.body}>

                    {/* Блок характеристик — компактный, по 2 колонки */}
                    <ul className={classes.specs}>
                      {Object.entries(product.specs).map(([key, value]) => {
                        // если значение — массив, делаем через запятую
                        const displayValue = Array.isArray(value) ? value.join(', ') : value;
                        return (
                          <li key={key} className={classes.specItem}>
                            <p className={`${classes.specLabel} text-sm`}>{key}:</p>
                            <p className={`${classes.specValue} text-sm`}>{displayValue}</p>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </li>
              ))
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

const renderNotFound = () => (
  <div className="section line-dark-section">
    <div className="container">
      <div className="content">
        <h1 className="h2 line-dark-text">Категория не найдена</h1>
        <NavLink to="/catalog" className="text-base hover">вернуться в каталог</NavLink>
      </div>
    </div>
  </div>
);

export default CatalogPage;
