import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { FaGoogle, FaGithub } from 'react-icons/fa';

const Login = () => {
    const { signInWithEmail, forgetPassword, logInWithGoogle, logInWithGithub } = useContext(AuthContext)
    const [userEmail, setUserEmail] = useState()

    const handleSignInWithEmail = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signInWithEmail(email, password)
            .then(result => {
                const user = result.user
                console.log(user)
            }).catch(error => {
                console.error(error)
            })
    }

    const handleOnBlur = event => {
        const email = event.target.value
        setUserEmail(email)
    }

    const handleForgetPassword = () => {
        if (!userEmail) {
            alert('Please Enter your email')
            return
        }
        forgetPassword(userEmail)
            .then(() => {
                alert('Please Check your email')
            }).catch(error => {
                console.error(error)
            })
    }

    const handleGoogleLogIn = () => {
        logInWithGoogle()
            .then(result => {
                const user = result.user
                console.log(user)
            }).catch(error => {
                console.error(error)
            })
    }
    const handleGithubLogIn = () => {
        logInWithGithub()
            .then(result => {
                const user = result.user
                console.log(user)
            }).catch(error => console.error(error))
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSignInWithEmail} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input onBlur={handleOnBlur} type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <Link onClick={handleForgetPassword} className="label-text-alt link link-hover">Forgot password?</Link>
                                </label>
                                <label className="label">
                                    <p>Create an account? <Link to='/register' className='link link-hover underline decoration-solid'>Register Now</Link></p>
                                </label>
                            </div>
                            <div>
                                <button onClick={handleGoogleLogIn} className='btn btn-primary mr-2'><FaGoogle className='text-xl' /></button>
                                <span>Or</span>
                                <button onClick={handleGithubLogIn} className='btn ml-2'><FaGithub className='text-xl' /></button>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;