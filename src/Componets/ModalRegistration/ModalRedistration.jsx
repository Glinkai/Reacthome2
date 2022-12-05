import CSSModules from 'react-css-modules';
import style from './modalRegistration.module.scss';

 function ModalRedistration() {
  return (
    <div styleName="container" >
        <form>
            <h1>Registration</h1>
            <div>
            <input type="text" placeholder="name" />
            </div>
            <div>
                <input type="text" placeholder="email"/>
            </div>
            <div styleName="btn-form">Send</div>
        </form>
    </div>
  )
}
export default CSSModules(ModalRedistration,style)