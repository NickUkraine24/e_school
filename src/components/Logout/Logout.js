import { useState} from 'react';
import {  HOST, POST} from '../../shared/global-variables';
import fetchDataFromAPI from '../../shared/fetch-data';

const Logout = () => {
    
        const [token, setToken]=useState();
        setToken(localStorage.getItem('auth'));

        fetchDataFromAPI(HOST + 'Logout',POST, {'Content-Type': 'application/json'})
        .then(res=>{
          console.log(res);
          
        })
        .catch(err =>{
          console.log(err);
        })
        
}
export default Logout;