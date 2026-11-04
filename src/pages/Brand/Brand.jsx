import NavLink from "../../Components/NavLink/NavLink.jsx";
import Btn from '../../Components/Btn/Btn'
import classes from './Brand.module.css'

import arrow from '../../assets/arrow.png';

const Brand = () => {
  return (
    <div className="section line-dark-section">
      <div className="container">
        <div className="content">

          <h1 className="h2 line-dark-text">бренд</h1>

          <div className={classes.contentItem}>
            <p className='text-base'>
              Мы приветствуем вас на официальном сайте производителя бытовой техники Weissgauff
            </p>
             <p className='text-base'>
              С 2012 года мы обеспечиваем дома наших покупателей по всей России умной и надежной техникой, рассчитанной на долгие годы безукоризненной службы
            </p>
          </div>
            
          <h3 className='h3'>Weissgauff сегодня это:</h3>

          <div className={`${classes.contentItem} ${classes.brandLine}`}>
            <ul className={classes.list}>
              <li className={classes.listItem}>
                <p className='text-base'>
                  <span className='bold'>Бренд № 1</span> по доле продаж крупной бытовой техники в онлайн-сегменте
                </p>
              </li>

              <li className={classes.listItem}>
                <p className='text-base'>
                  <span className='bold'>14 лет</span> на российском рынке
                </p>
              </li>

              <li className={classes.listItem}>
                <p className='text-base'>
                  Производство <span className='bold'>на 50ти самых современных производственных площадках</span> в Китае, Турции, России и Польше
                </p>
              </li>

              <li className={classes.listItem}>
                <p className='text-base'>
                  <span className='bold'>Широчайший ассортимент</span> отдельностоящей "холодильники,  стиральные и сушильные машины, посудомоечные машины", встраиваемой "духовые электрические и газовые шкафы, варочные панели газовые, электрические, индукционные , вытяжки, посудомоечные машины и тд" бытовой техники
                </p>
              </li>

              <li className={classes.listItem}>
                <p className='text-base'>
                  Полноценная <span className='bold'>линейка товаров для дома и кухни</span> (вертикальные пылесосы, кофемашины, грили, планетарные миксеры, мясорубки, чайники и термопоты и тд), запущенная в 2024 году
                </p>
              </li>

              <li className={classes.listItem}>
                <p className='text-base'>
                  <span className='bold'>3 года гарантии</span> на технику
                </p>
              </li>

              <li className={classes.listItem}>
                <p className='text-base'>
                 <span className='bold'> 8 фирменных магазинов и фирменный интернет-магазин</span> 
                </p>
              </li>

              <li className={classes.listItem}>
                <p className='text-base'>
                  Сервис, покрывающий <span className='bold'>всю Россию</span> 
                </p>
              </li>

              <li className={classes.listItem}>
                <p className='text-base'>
                  Более <span className='bold'>1 000 000 положительных отзывов</span> в интернете
                </p>
              </li>
            </ul>
          </div>

          <div className={classes.contentItem}>
            <h3 className='h3'>Как нам это удалось?</h3>

            <p className='text-base'>
              каждый день мы работаем над тем, чтобы наши ценности воплощались в нашу продукцию, которая будет радовать вас снова и снова
            </p>
          </div>

          <div className={`${classes.contentItem} ${classes.brandLine}`}>
            <ul className={classes.listSm}>
              <li className={classes.listItemSm}>
                <p className='text-base bold'>
                  Неизменно высокое качество, выраженное в долговечности и безотказности каждой модели
                </p>

                <p className='text-sm'>
                  после разработки дизайн-проекта модели и утверждения технического задания на производство, вся документация направляется на лучшие инновационные заводы, расположенные в Китае, Европе и России и обладающие наивысшим уровнем инфраструктурного и технического обеспечения. Таким образом достигается планка качества, идущая на одном уровне с ведущими европейскими брендами - а порой и превышающая этот показатель. Weissgauff всегда ставит одним из своих приоритетов непрерывное технологическое совершенствование моделей с целью максимизации качества выпускаемой продукции
                </p>
              </li>

              <li className={classes.listItemSm}>
                <p className='text-base bold'>
                  Ценовая доступность наших товаров для самого широкого круга потребителей
                </p>

                <p className='text-sm'>
                  бытовая техника и аксессуары для дома от Weissgauff — это качество, доступное каждому. В нашем ассортименте вы найдете модели на любой вкус и кошелек. Однако даже бюджетные модели проходят все те же этапы проверки качества, что и дорогие изделия
                </p>
              </li>

              <li className={classes.listItemSm}>
                <p className='text-base bold'>
                  Наши товары попадают лишь к проверенным дилерам, заслужившим достойную репутацию в работе с покупателями
                </p>

                <p className='text-sm'>
                  мы тщательно следим за нашими ценами, не допуская обмана покупателей
                </p>
              </li>

              <li className={classes.listItemSm}>
                <p className='text-base bold'>
                  Уровень брака по любой из наших товарных категорий не превышает 1% от общего числа выпущенных в данной категории моделей
                </p>

                <p className='text-sm'>
                  многоступенчатая система контроля качества — это одно из наших особых достижений, позволивших прийти к высокому показателю безотказности: для каждой категории товара процент безупречных моделей, не обладающих ни единым заводским дефектом, превышает 99%
                </p>
              </li>

            </ul>
          </div>


          <div className={`${classes.contentItem} ${classes.contentBottom}`}>
            <p className='text-base'>
              откройте и вы для себя легендарное качество нашей техники, которое впоследствии будет долгие годы радовать вас и вашу семью
            </p>
            <Btn className='bg-color hover-bg'>
              <NavLink className='arrow-link-box' href={'/catalog'}>
                перейти в каталог техники <img className='arrow-link' src={arrow} alt="" />
              </NavLink>
            </Btn>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Brand;
