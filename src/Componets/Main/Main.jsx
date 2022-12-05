import CSSModules from 'react-css-modules';
import style from './main.module.scss';


function Main() {
  return (
    <div styleName='main'>
      <div styleName="main__title">
        <h1>Исследуйте мир вместе с нами</h1>
        <p>Брось себе вызов. Отправься в путешествия в дикие уголки природы.</p>
      </div>
      <div styleName="main__form">
        <h3>Быстрый поиск тура</h3>
        <form styleName='form'>
          <div styleName='form__search'>
            <input placeholder='Куда' type="text"  />
            <img src="./assets/icons/search_main_form.png" alt="search" />
          </div>
          <div>
            <input placeholder='Когда' type="text" />
            <input placeholder='Продолжительность' type="text" />
          </div>
       
          <div styleName='main__form-button'>Найти</div>
        </form>
      </div>
    </div>
  )
}
export default CSSModules(Main,style)