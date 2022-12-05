import CSSModules from 'react-css-modules';
import Header from '../Header/Header';
import style from './app.module.scss';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import ModalAuth from '../ModalAuth/ModalAuth';
import { useState } from 'react';


 function App() {
  
  const [authUser,setAuthUser] = useState(false);
 


if(!authUser){
  return(
   <ModalAuth setAuthUser={setAuthUser} />
 );
}


  return(
  <div styleName="container">
    <Header/>
    <Main/>
    <Footer/>
  </div>
  );
}

export default CSSModules(App,style)

