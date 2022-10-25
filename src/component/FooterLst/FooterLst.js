import React from 'react';
import { FaGoogle, FaGithub } from 'react-icons/fa'
import { Link } from 'react-router-dom';

const FooterLst = () => {
    return (
        <div>
            <div>
                <div className='mb-3'>
                    <button className="btn btn-active btn-primary"><FaGoogle className='mr-2' />Google</button>
                </div>
                <div>
                    <button className="btn"><FaGithub className='mr-2' />Github</button>
                </div>
            </div>
        </div>
    );
};

export default FooterLst;