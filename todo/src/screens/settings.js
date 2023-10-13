import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/button';


function Settings() {




    let navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [surname, setSurName] = useState('');
    const [age, setAge] = useState('');



    useEffect(() => {
        const data = localStorage.getItem("userInfo");
        console.log(JSON.parse(data).username);
        setUsername(JSON.parse(data).username);
        setSurName(JSON.parse(data).surname);
        setAge(JSON.parse(data).age);

    }, [])

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handleSurNameChange = (e) => {
        setSurName(e.target.value);
    };

    const handleAgeChange = (e) => {
        setAge(e.target.value);
    };


    const handleSubmit = (e) => {
        let data = { username: username, surname: surname, age: age };

        e.preventDefault();
        localStorage.setItem("userInfo", JSON.stringify(data));

    };

    return (
        <div className="todo-container">

            <div class="navbar">

                <a id="icon" href="https://www.flaticon.com/free-icons/to-do" title="to do icons">Settings</a>
                <a href="/">Çıkış Yap</a>
                <a href="/settings">Settings</a>
                <a href="/todo">Todo</a>


            </div>

            <div className='loginDesign'>
                <h2 style={{ fontFamily: ' "Brush Script MT", cursive', fontSize: '45px' }}>Settings</h2>


                <form onSubmit={handleSubmit}>
                    <div >
                        <label htmlFor="username" className='settLabelDesign'>Kullanıcı Adı:</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={username}
                            className='settDesign'
                            onChange={handleUsernameChange}
                        />
                    </div>

                    <div>
                        <label htmlFor="username" className='settLabelDesign'>Soyad:</label>
                        <input
                            type="text"
                            id="surname"
                            name="surname"
                            value={surname}
                            className='settDesign'
                            onChange={handleSurNameChange}
                        />
                    </div>

                    <div>
                        <label htmlFor="username" className='settLabelDesign'>Yaş:</label>
                        <input
                            type="text"
                            id="age"
                            name="age"
                            value={age}
                            className='settDesign'
                            onChange={handleAgeChange}
                        />
                    </div>

                    {/* <button type="submit">KAYDET</button> */}

                    <br />

                    <Button type="submit" text="Kaydet" onClick={handleSubmit} className='buttonDesign' />
                </form>
            </div>



        </div>
    );
}

export default Settings;
