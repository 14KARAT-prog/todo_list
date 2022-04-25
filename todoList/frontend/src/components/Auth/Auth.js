import React, { useState } from "react";
import './Auth.css';

function Auth({ getToken }) {
    const [signInData, setSignInData] = useState({"login": '', "password": ''});

    const handleChange = (event) => {
        setSignInData(signInData => ({...signInData, [event.target.name] : event.target.value}));
    }
    const handleSubmit = (event) => {
        getToken(signInData.login, signInData.password);
        event.preventDefault();
    }


    return (
        <main>
            <div className="container">
                <h2>Форма для входа</h2>
                <form>
                    <div className="fieldForm">
                        <label>Введите имя</label>
                        <input type="text" name="login" placeholder="login" 
                        value={signInData.login}
                        onChange={(event) => handleChange(event)} 
                        />
                    </div>
                    <div className="fieldForm">
                        <label>Введите пароль</label>
                        <input type="password" name="password" placeholder="password" 
                        value={signInData.password} 
                        onChange={(event) => handleChange(event)}
                        />
                    </div>
                    <button className="submit" type="submit" onClick={(event) => handleSubmit(event)}>
                        sign In
                    </button>
                </form>
            </div>
        </main>
    )
}

export default Auth;