import classes from "./Footer.module.css"

import vk from '../../assets/footer/vk.png'
import poster from '../../assets/footer/poster.jpg'

const Footer = () => {
  return (
    <div className="section"> 
      <div className="container-footer">
        <div className="content">

          <div className={classes.top}>
            <a className="h2 hover" href="tel:+74951085386">8 495 108 53 86</a>
            <p className="text-sm">время работы: пн-пт с 9:00 до 21:00, сб-вс с 10:00 до 21:00</p>
          </div>

          <div className={classes.content}>
            <div className={classes.listBox}>
              <h2 className="h3">Магазин</h2>

              <ul className={classes.list}>
                <li className={classes.item}>
                  <a className={`${classes.link} text-sm hover`} href="#">О бренде</a>
                </li>
                <li className={classes.item}>
                  <a className={`${classes.link} text-sm hover`} href="#">Акции</a>
                </li>
                <li className={classes.item}>
                  <a className={`${classes.link} text-sm hover`} href="#">Каталог</a>
                </li>
                <li className={classes.item}>
                  <a className={`${classes.link} text-sm hover`} href="#">Новости</a>
                </li>
                <li className={classes.item}>
                  <a className={`${classes.link} text-sm hover`} href="#">Контакты</a>
                </li>
                <li className={classes.item}>
                  <a className={`${classes.link} text-sm hover`} href="#">Договор оферты</a>
                </li>
                <li className={classes.item}>
                  <a className={`${classes.link} text-sm hover`} href="#">Где купить</a>
                </li>
                <li className={classes.item}>
                  <a className={`${classes.link} text-sm hover`} href="#">Франшиза</a>
                </li>
              </ul>
            </div>

            <div className={classes.listBox}>
              <h2 className="h3">Поддержка</h2>

              <ul className={classes.list}>
                <li className={classes.item}>
                  <a className={`${classes.link} text-sm hover`} href="#">Контакты</a>
                </li>
                <li className={classes.item}>
                  <a className={`${classes.link} text-sm hover`} href="#">Отзывы покупателей</a>
                </li>
                <li className={classes.item}>
                  <a className={`${classes.link} text-sm hover`} href="#">Важная информация</a>
                </li>
                <li className={classes.item}>
                  <a className={`${classes.link} text-sm hover`} href="#">Установка техники</a>
                </li>
                <li className={classes.item}>
                  <a className={`${classes.link} text-sm hover`} href="#">Условия гарантии</a>
                </li>
                <li className={classes.item}>
                  <a className={`${classes.link} text-sm hover`} href="#">Часто задаваемые вопросы</a>
                </li>
                <li className={classes.item}>
                  <a className={`${classes.link} text-sm hover`} href="#">Заявка на сервисное обслуживание</a>
                </li>
                <li className={classes.item}>
                  <a className={`${classes.link} text-sm hover`} href="#">Форма для обращения оптовых покупателей</a>
                </li>
                <li className={classes.item}>
                  <a className={`${classes.link} text-sm hover`} href="#">Заявка на заказ запасных частей</a>
                </li>
                <li className={classes.item}>
                  <a className={`${classes.link} text-sm hover`} href="#">Заявка на техническую консультацию</a>
                </li>
                <li className={classes.item}>
                  <a className={`${classes.link} text-sm hover`} href="#">Дополнительный год гарантии на технику Weissgauff</a>
                </li>
              </ul>
            </div>

            <div className={classes.listBox}>
              <h2 className="h3">Присоединяйтесь к нам</h2>

              <ul className={classes.listImg}>
                <li className={classes.item}>
                  <a className={`${classes.link} text-sm hover`} href="#">
                    <img className={classes.vk} src={vk} alt="vk" />
                  </a>
                </li>
                <li className={classes.item}>
                  <img className={classes.poster} src={poster} alt="poster" />
                </li>
              </ul>
            </div>
          </div>

          <div className={classes.down}>
            <p className="text-sm">© 2013-2026 Weissgauff Все права защищены</p>
            <div className={classes.donwLinks}>
              <a className={`${classes.downLink} text-sm hover`} href="#">
                Условия использования и политика конфиденциальности
              </a>
              <a className={`${classes.downLink} text-sm hover`} href="#">
                Договор-ОФЕРТА
              </a>
              <a className={`${classes.downLink} text-sm hover`} href="#">
                Согласие на обработку персональных данных
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Footer;