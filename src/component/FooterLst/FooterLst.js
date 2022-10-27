import { React, useContext } from 'react';
import { FaGoogle, FaGithub } from 'react-icons/fa'
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const FooterLst = () => {
    const { logInWithGoogle, logInWithGithub, abc } = useContext(AuthContext)

    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'
    const handleGoogleLogIn = () => {
        logInWithGoogle()
            .then(result => {
                const user = result.user
                navigate(from, { replace: true })
            }).catch(error => {
                console.error(error)
            })
    }
    const handleGithubLogIn = () => {
        logInWithGithub()
            .then(result => {
                const user = result.user
                navigate(from, { replace: true })
            }).catch(error => console.error(error))
    }
    return (
        <div>
            <div>
                <div className='mb-3'>
                    <button onClick={handleGoogleLogIn} className="btn btn-active btn-primary"><FaGoogle className='mr-2' />Google</button>
                </div>
                <div>
                    <button onClick={handleGithubLogIn} className="btn"><FaGithub className='mr-2' />Github</button>
                </div>
            </div>
        </div>
    );
};

export default FooterLst;