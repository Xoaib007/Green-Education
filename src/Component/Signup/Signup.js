import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';
import './Signup.css'

const Signup = () => {
    const [error, setError] = useState(null);
    const {createUser} = useContext(AuthContext);

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        console.log(email, password, confirm);

        if(password.length <= 6){
            setError('password must be upto 6 charecter');
            return;
        }
        if(password !== confirm){
            setError('pass not matched');
            return;
        }

        createUser(email, password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            form.reset();
        })

        .catch(error => console.error(error));

    }

    return (
        <div className='form-container'>
            <h2 className='form-title'>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <div className='form-control'>
                    <label htmlFor='email'>Email</label>
                    <input type='email' name='email'/>
                </div>
                <div className='form-control'>
                    <label htmlFor='password'>Password</label>
                    <input type='password' name='password'/>
                </div>
                <div className='form-control'>
                    <label htmlFor='confirm'>Retype Password</label>
                    <input type='password' name='confirm'/>
                </div>
                <input type='submit' value='Signup' className='submit'></input>
            </form>
            <p>Already have an account? <Link to='/login'>Log in here</Link></p>
            <p className='errorr'>{error}</p>
        </div>
    );
};

export default Signup;