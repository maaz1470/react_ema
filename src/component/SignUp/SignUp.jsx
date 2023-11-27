import React, { useContext, useState } from 'react';
import './SignUp.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const SignUp = () => {
    const { createUser } = useContext(AuthContext)
    const [error, setError] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;

        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        const confirmPassword = form.confirm.value;
        if (password !== confirmPassword) {
            setError('Password not match');
            return;
        } else if (password.length < 6) {
            setError('Password must be 6 character or longer')
            return;
        } else {
            createUser(email, password)
                .then(response => {
                    console.log(response.user)
                    form.reset();
                }).catch(error => {
                    console.log(error)
                })
        }
    }
    return (
        <div>
            <div className='form-container'>
                <h1 className='form-title'>Sign Up</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" name='email' id='email' required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name='password' id='password' required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="confirm">Confirm Password</label>
                        <input type="password" name='confirm' id='confirm' required />
                    </div>
                    <input type="submit" value="Sign Up" className='btn-submit' />
                </form>
                <p><small>All have and account? <Link to="/login">Login</Link></small></p>
                <p className='text-error'>{error}</p>
            </div>
        </div>
    );
};

export default SignUp;