import React from 'react';
import { Link } from 'react-router-dom';

const NotAvailableRoute = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-6xl font-bold">4O4</h1>
                        <p className="py-6">This page is not available on this website.</p>
                        <Link to='/'><button className="btn btn-primary">Bact Home</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotAvailableRoute;