import CSSModules from 'react-css-modules';
import style from './modalAuth.module.scss';
//import auth from '../../data/auth.json'
import { useState } from 'react';
import ModalRedistration from '../ModalRegistration/ModalRedistration';

function ModalAuth({setAuthUser}) {

    const [value,setValue] = useState('');
    const [error,setError] = useState(false);
    const[reg,setReg] = useState(false);




    function hundleValueForm(){
    //     const copyAuth = auth.filter((item)=>item.userName === value)
    //     if(copyAuth.length > 0){
    //      setAuthUser(true)
    //      return
    //     }
    //     setError(true)
    //     setTimeout(()=>{

    //        setError(false)
    //     },1000)
    //     setValue('')
        fetch('http://localhost:3001/posts')
        .then(responce => responce.json())
        .then(data => console.log(data))
        }
       
       function handelValueInput(event){
        setValue(event.target.value)
       }
       
if(reg){
    return <ModalRedistration/>;

}


  return (
    <div styleName="wrapper__auth-form">
    <form >
      <h1>Welcome</h1>
      { error && <h2>Такого пользователя не существует</h2>}
      <div>
        <input type="text" placeholder="name user" onChange={handelValueInput} value={value}/>
      </div>
      <button onClick={hundleValueForm} styleName="btn-form" >SEND</button>
      <div onClick={()=>{setReg(true)}} styleName="btn-form">Registration</div>
    </form>
  </div>
  )
}
export default CSSModules(ModalAuth,style)