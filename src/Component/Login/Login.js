import { useContext } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';
import './Login.css'

const Login = () => {
    const {signIn} = useContext(AuthContext);

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
        .catch(error => console.error(error))
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
            <p>New to Ema-john? <Link to='/signup'>Create a new account</Link></p>
        </div>
    );
};

export default Login;