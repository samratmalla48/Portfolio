import React from "react";
import bg from "../../assets/image.png";
import "./intro.css";
import btnImg from '../../assets/hireme.png'
import { Link } from "react-scroll";

const Intro = () => { 
    <section id = "intro" >
    <div className = "introContent" > </div>
    <span className = "hello" > Hello, </span> 
    <span className = "introText">I'm <span className="introName">Smith</span> <br/> Website Designer </span>
    <p className="introPara">I am a skilled web designer with experience in creating visually appealing and user friendly websites.</p>
    <Link><button className="btn"><img src={btnImg} alt="Hire Me" />Hire Me</button></Link>
    <img src = { bg } alt = "Profile" className = "bg"/>
    </section>
};

export default Intro;