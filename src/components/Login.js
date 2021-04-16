import React from 'react';
import '../styles/Login.css';
import Api from '../Api';

export default ({onReceive}) => {
    const handleFacebookLogin =  async () => {
        let result= await Api.fbPopup();
        if(result){
            onReceive(result.user);

        }else{
            alert("Falha ao Efetuar Login!");
        }

    }
    return(
        <div className="login">
            <button onClick={handleFacebookLogin}>Logar com Facebook</button>
        </div>
    );
}