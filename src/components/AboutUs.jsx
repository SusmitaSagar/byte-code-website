import React from 'react';
import logo from "../byte-code-learners.svg";
const AboutUs = () => {
    return ( 
        <div className="about">
            <div className="bg-logo">
                <img src={logo} alt="Byte Code Logo" />
            </div>
            <h1>About Us</h1>
            <p> <em>ByteCodeLearner</em> is a group of students working together with patience and enthusiasm to create something Ctrl + N. Anyone who is passionate about exploring the technologies or want to learn something new can join the club. We believe that learning together is fun. Along with academic knowledge, various skills are there, a student should have. We are here for you to introduce all those things and build your personality full with required skills.</p>
        </div>
     );
}
 
export default AboutUs;