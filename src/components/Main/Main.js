import React , {useState, useEffect} from 'react';
import './Main.css';

const Main = () => {
  const [token, setToken] = useState();
  useEffect(() => {
    // Обновляем заголовок документа, используя API браузера
    setToken(localStorage.getItem('auth'));
  });

  
   if(token){
     return(<h2 align="center">You are loged in</h2>);
   }

   return(<h2 align="center">Please, log in</h2>)
   
}

export default Main;
