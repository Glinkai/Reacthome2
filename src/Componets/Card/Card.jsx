import CSSModules from 'react-css-modules';
import style from './card.module.scss';

function Card(props) {
  return (
    <div styleName='wrapper__card'>
      <div>
        <img src={props.img} alt="" />
      </div>
      <p>
        {props.title}
      </p>
    </div>
  )
}
 
export default CSSModules(Card,style)