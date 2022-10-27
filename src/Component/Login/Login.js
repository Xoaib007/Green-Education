import { useContext } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';
import app from '../../Firebase/Firebase.config';
import { getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import './Login.css'
import { Button } from 'react-bootstrap';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const auth= getAuth(app);

const Login = () => {
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const {signIn, providerLogin} = useContext(AuthContext);

    const navigate = useNavigate();

    const location= useLocation();
    const from = location?.state?.from.pathname || '/';

    const handleSubmit = (e) =>{
        e.preventDefault()
        const form= e.target;
        const email= form.email.value;
        const password = form.password.value;

        signIn(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            form.reset();
            navigate(from, {replace: true})
        })
        .catch( () => toast("Please write a correct email"))
    }

    const handleGoogleSignIn = () =>{
        providerLogin(googleProvider)
        .then(result =>{
            const user = result.user;
            console.log(user)
        })
    }

    const handleGHSignIn = () =>{
        signInWithPopup(auth, githubProvider)
        .then(result =>{
            const user = result.user;
            console.log(user)
        })
    }

    return (
        <div className='form-container'>
            <h2 className='form-title'>Log In</h2>
            <form onSubmit={handleSubmit}>
                <div className='form-control'>
                    <label htmlFor='email'>Email</label>
                    <input type='email' name='email' id=''/>
                </div>
            <div className='form-control'>
                <label htmlFor='password'>Password</label>
                <input type='password' name='password' id=''/>
            </div>
            <input type='submit' value='Login' className='submit'></input>
            </form>
            
            <Button onClick={handleGoogleSignIn} variant='outline-primary'>Sign In with Google</Button>
            <Button onClick={handleGHSignIn} variant='outline-primary'>Sign In with Github</Button>
            <p>New to EGreen education? <Link to='/signup'>Create a new account</Link></p>
        </div>
    );
};

export default Login;