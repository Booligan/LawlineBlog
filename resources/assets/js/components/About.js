import React from 'react';
import AboutSplash from '../components/AboutSplash';


const About = () => (
    <div>
        <AboutSplash />
        <div className="container"><br />
            <p className="about-summary">
                This web app was made with PHP/Laravel on the backend and uses MySQL as a database.
                The frontend uses React.js and, for styling, react-bootstrap and custom CSS.
            </p>
        </div>
    </div>
)

export default About;