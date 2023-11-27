import React, { useContext } from 'react';
import './Login.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../component/Provider/AuthProvider';

const Login = () => {
    const {userSignIn} = useContext(AuthContext)
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        userSignIn(email, password)
        .then(response => {
            console.log(response.user)
            form.reset();
        }).catch(error => {
            console.log(error)
        })
    }
    return (
        <div className='form-container'>
            <h1 className='form-title'>Login</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" name='email' id='email' required />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name='password' id='password' required />
                </div>
                <input type="submit" value="Login" className='btn-submit' />
            </form>
            <p><small>New to Ema-john? <Link to='/signup'>Create New Account</Link></small></p>
        </div>
    );
};

export default Login;