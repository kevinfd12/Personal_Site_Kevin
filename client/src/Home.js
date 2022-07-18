import React from "react";
import "./Home.css"
import { Link } from 'react-router-dom'

const Home = () => {
    return (
    <div className="Home__Container-Home-Page">
        <div className="Home__left">
        <div className="Shape"></div>
        <img src={"https://media-exp1.licdn.com/dms/image/C4D03AQGtGFVXTrHV_Q/profile-displayphoto-shrink_800_800/0/1553398420986?e=1663200000&v=beta&t=UN7peWuZSW0B8TovvojL1oq8Su9f3LoypaYgfqBz8IA"}alt="" className="Left_Side_Image" />
        </div>
        <div className="Home__right">
        <div className="Home__Container__Wrapper">
        <h1 className="Title__Intro">Hi, My name is</h1>
                <h2 className="Title__Name">Kevin Diaz Gochez</h2>
            <div className="Body__Headings">
            <div className="Body__Headings__Wrapper">
                <div className="Body__Heading_Items">Frontend Engineer</div>
                <div className="Body__Heading_Items">Scrum Master</div>
                <div className="Body__Heading_Items">Statistics Alum</div>
                <div className="Body__Heading_Items">Data Enthusiast</div>
                <div className="Body__Heading_Items">Active Learner</div>
            </div>
        </div>
        <div className="Description">Rising Junior at Baruch College enamored with the application of technology and ML tools in the financial services industry. Rising Junior at Baruch College enamored with the application of technology and ML tools in the financial services industry. 
        Rising Junior at Baruch College enamored with the application of technology and ML tools in the financial services industry.
        Rising Junior at Baruch College enamored with the application of technology and ML tools in the financial services industry. </div>
        </div>
        <Link to="/contact" className="flat-button">CONTACT ME</Link>
        </div>
    </div>
    );
}

export default Home