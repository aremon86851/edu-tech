import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Register = () => {
    const { createUserWithEmail, setProfile } = useContext(AuthContext)
    const handleSubmitWithEmail = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const photoUrl = form.photoUrl.value
        const email = form.email.value;
        const password = form.password.value;
        createUserWithEmail(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                handleUpdateProfile(name, photoUrl)
            }).catch(error => {
                console.error(error)
            })

    }

    const handleUpdateProfile = (name, photoUrl) => {
        const profile = {
            displayName: name,
            photoURL: photoUrl
        }
        setProfile(profile)
            .then(() => { })
            .catch(error => console.error(error))
    }

    return (
        <div>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmitWithEmail} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Full Name</span>
                                </label>
                                <input type="text" name='name' placeholder="full-name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" name='photoUrl' placeholder="photo-url" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <p>Have an account? <Link to="/login" className="label-text-alt link link-hover underline text-decoration">Login Now</Link></p>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;