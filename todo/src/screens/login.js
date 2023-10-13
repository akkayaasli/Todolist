import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import Input from '../components/input'
import Button from '../components/button'


function Login() {
    let navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (username === 'admin' && password === 'admin') {
            navigate('/todo');
        } else {
            alert('Hatalı kullanıcı adı veya şifre!');
        }
    };



    return (
        <div className="todo-container">


            <div className='loginDesign'>

                <h2 style={{ fontFamily: ' "Brush Script MT", cursive', fontSize: '45px' }}>Login</h2>



                <form onSubmit={handleSubmit}>
                    <Input
                        title={'Kullanıcı Adı:'}
                        value={username}
                        id="username"
                        className='settDesign'
                        onChange={handleUsernameChange}
                        inputType={'text'}
                    />
                    <Input
                        title={'Şifre:'}
                        value={password}
                        id="password"
                        className='settDesign'
                        onChange={handlePasswordChange}
                        inputType={'password'}
                    />
                    <br />

                    <Button type="submit" text="Giriş Yap" onClick={handleSubmit} className='buttonDesign' />


                </form>

            </div>


        </div>
    );
}

export default Login;
