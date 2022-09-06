import React, { useRef } from 'react';
// import axios from 'axios';


const divStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: 'white'
}

function Login() {

    const user = useRef();
    const password = useRef();

    const loginRequest = () => {

    }

    return (
        <div style={divStyle}>
            <form>
                <h1>Kirjaudu sisään</h1><br></br>
                <label>Käyttäjätunnus:</label><br></br>
                <input type='text' value='Testi' onChange={(e) => { user.current = e.target.value; }} ref={user}></input><br></br><br></br>
                <label>Salasana:</label><br></br>
                <input type='password' value='Testi' onChange={(e) => { password.current = e.target.value; }} ref={password}></input><br></br><br></br>
                <button name='login' onClick={loginRequest}>Kirjaudu</button>
                <a href='http://' style={{ float: 'right', marginRight: '5px' }}>Luo käyttäjä</a>
            </form>
        </div>
    );
}

export default Login;