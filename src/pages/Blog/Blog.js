import React from 'react';

const Blog = () => {
    return (
        <div className='lg:w-2/4 md:w-3/4 w-11/12 mx-auto my-10 text-left '>
            <div>
                <h2 className='text-white text-2xl my-2'><span className='font-bold'>1. Questions : </span><span className='italic'>What is cors ?</span></h2>
                <p><span className='font-bold'>Answer : </span><span className='text-gray-300 italic'>The full meaning of cors = <span className='italic font-bold'>Cross-origin resource sharing.</span> Cross-origin resource sharing is a mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the first resource was served. A web page may freely embed cross-origin images, stylesheets, scripts, iframes, and videos.<br /> ALso We are using cors in this website server side. When we don't use cors the not given to permission us to access server data that's why we are using cors. <br /></span></p>
            </div>
            <div className='mt-7'>
                <h2 className='text-white text-2xl my-2'><span className='font-bold'>2. Questions : </span><span className='italic'>Why are you using firebase? What other option do have implement authentication ? </span></h2>
                <p><span className='font-bold'>Answer : </span><span className='text-gray-300 italic'>Firebase : Actually, Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. And also firebase uses system is too much easy and there documentation is quite good.It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.<br /></span>
                    <span className='text-gray-300 italic'>
                        Firebase: We can use many of authentication system like firebase . I think firebase alternative is Auth0, MongoDB, Passport, Okta etc .
                    </span>
                </p>
            </div>
            <div className='mt-7'>
                <h2 className='text-white text-2xl my-2'><span className='font-bold'>3. Questions : </span><span className='italic'>How does the private route work ? </span></h2>
                <p><span className='font-bold'>Answer : </span><span className='text-gray-300 italic'>
                    Actually, private route like a public route. Just difference is when a user not login in the website, then redirect to the log in page, otherwise user go anywhere in the website as her want. We know that private route has children , when user is logged in the website then the website redirect to the user in the log in page. Private route other name is protected route.
                </span>
                </p>
            </div>
            <div className='mt-7'>
                <h2 className='text-white text-2xl my-2'><span className='font-bold'>4. Questions : </span><span className='italic'>What is node ? How does node work ?</span></h2>
                <p><span className='font-bold'>Answer : </span><span className='text-gray-300 italic'>
                    Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on a JavaScript Engine and executes JavaScript code outside a web browser, which was designed to build scalable network applications.<br />
                    Node is used as backend service when javascript works at the server side applications. Node.js runs on chrome v8 engine which convert javascript code into the machine code
                </span>
                </p>
            </div>
        </div>
    );
};

export default Blog;