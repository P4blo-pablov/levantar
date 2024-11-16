import React from "react";
import "./home.css";
//import Me from "../../assets/avatar.jpg"
//            <img src = {Me} alt="" className="home__img"/>;
import HeaderSocials from "./HeaderSocials";

const Home =()=>{
    return (
        <section className="home container" id="home">
            <div className="intro">
            <h1 className="home__minombre">PABLO</h1>
            <h2 className="home__name">HI, QUE TAL</h2>
            <span className="home__education">Soy un estudiante en camino al Front-End</span>
            <HeaderSocials/>

            <a href="#contact" className="btn">Contactame</a>

            </div>
        </section>
    )
}

export default Home