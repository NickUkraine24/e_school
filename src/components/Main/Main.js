import React , {useState, useEffect} from 'react';
import './Main.css';

const Main = () => {
  const [token, setToken] = useState();
  useEffect(() => {
    // Обновляем заголовок документа, используя API браузера
    setToken(localStorage.getItem('auth'));
  });

  
   if(token){
     return(<h2>You are loged in</h2>);
   }

   return(<h2>Please, log in</h2>)
   
}

export default Main;
