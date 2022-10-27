import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';
import './Signup.css'

const Signup = () => {
    const [error, setError] = useState(null);
    const {createUser, providerLogin} = useContext(AuthContext);

    const googleProvider = new GoogleAuthProvider();

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        const displayName = form.name.value;
        const photoUrl = form.photo.value
        console.log(email, password, confirm);

        if(password.length <= 6){
            setError('password must be upto 6 charecter');
            return;
        }
        if(password !== confirm){
            setError('pass not matched');
            return;
        }

        createUser(email, password,displayName, photoUrl )
        .then(result =>{
            const user = result.user;
            console.log(user);
            form.reset();
        })

        .catch(error => console.error(error));

    }

    const handleGoogleSignIn = () =>{
        providerLogin(googleProvider)
        .then(result =>{
            const user = result.user;
            console.log(user)
        })
    }

    return (
        <div className='form-container'>
            <h2 className='form-title'>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <div className='form-control'>
                    <label htmlFor='name'>Name</label>
                    <input type='text' name='name'/>
                </div>

                <div className='form-control'>
                    <label htmlFor='photo'>Photo URL</label>
                    <input type='url' name='photo'/>
                </div>

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
            <Button onClick={handleGoogleSignIn} variant='outlinr-primary'>Sign In with Foogle</Button>
            <p>Already have an account? <Link to='/login'>Log in here</Link></p>
            <p className='errorr'>{error}</p>
        </div>
    );
};

export default Signup;