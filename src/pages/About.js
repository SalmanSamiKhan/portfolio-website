import React from 'react'
import "../styles/About.css";
import pic from '../assets/salman.jpg'

const About = () => {
    return (
        <div className='about my-5'>
            <div className="container">
                <div className="heading">
                    <h2 className='my-5 heading'>About Me</h2>
                </div>
                <div className="about-body container">
                <div className="pic my-5">
                    <img src={pic} alt="" />
                </div>
                <div className="info">
                    <h3>š Computer Science Graduate</h3>
                    <h3>šØāš» A passionate Self-taught Full Stack developer</h3>
                    <h3>š­ Iām currently working on an Ecommerce Website</h3>
                    <h3>š± At present Iām learning MERN STACK</h3>
                    <h3>š¼ Iām currently open for a new job opportunity</h3>
                </div>
                </div>
            </div>
        </div>
    )
}

export default About