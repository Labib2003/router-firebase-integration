import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {
    
    return (
        <div>
            <h2>This is login</h2>
            <div style={{margin: '20px'}}>
                <button onClick={}>Google Sign In</button>
            </div>
            <form>
                <input type="email" placeholder='Email' />
                <br />
                <input type="password" placeholder='Password' />
                <br />
                <input type="submit" value="Login" />
            </form>
        </div>
    );
};

export default Login;