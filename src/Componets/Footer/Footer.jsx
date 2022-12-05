import Card from '../Card/Card';
import CSSModules from 'react-css-modules';
import style from './footer.module.scss';
import data from '../../data/cards.json'

function Footer() {

  return (
    <div>
      <h2>Почему именно мы</h2>
      <div styleName='wrapper__card'>
      {data.map((item,index)=>(
        <Card title={item.title} img={item.img} key={index}/>
      ))}
      </div>
    </div>
  )
}
export default CSSModules(Footer,style)