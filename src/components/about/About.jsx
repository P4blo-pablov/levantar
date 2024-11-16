import React from "react";
import "./about.css";
import Image from "../../assets/imagen__cambiada.jpg"
import AboutBox from "./AboutBox";

const About = () => {
    return (
        <section className="about container section" id = 'about'>
            <h2 className="section__title">Sobre mi</h2>
            
            <div className="about__container grid">
                <img src={Image} alt="" className="about__img" />

                <div className="about__data grid">

                    <div className="about__info">
                        <p className="about__description">Hi, ¿qué tal? Mi nombre es Pablo y soy estudiante de Ingeniería de Sistemas. Una de mis metas es superar el miedo a programar solo, quiero ser un desarrollador Front-End profesional. Además, quiero usar mis habilidades para crear soluciones que puedan ayudar a quienes lo necesiten. </p>
                    </div>

                    <div className="about__skills grid">

                        <div className="skills__data">

                            <div className="skills__titles">
                                <h3 className="skills__name">Desarrollador</h3>
                                <span className="skills__number">70%</span>
                            </div>

                            <div className="skills__bar">
                                <snap className="skills__percentage development"></snap>
                            </div>

                        </div>

                        <div className="skills__data">

                            <div className="skills__titles">
                                <h3 className="skills__name">Diseñador UI/UX</h3>
                                <span className="skills__number">65%</span>
                            </div>

                            <div className="skills__bar">
                                <snap className="skills__percentage ui__design"></snap>
                            </div>

                        </div>

                        <div className="skills__data">

                            <div className="skills__titles">
                                <h3 className="skills__name">JavaScript</h3>
                                <span className="skills__number">50%</span>
                            </div>

                            <div className="skills__bar">
                                <snap className="skills__percentage javascript"></snap>
                            </div>

                        </div>

                        <div className="skills__data">
                            
                            <div className="skills__titles">
                                <h3 className="skills__name">HTML and CSS</h3>
                                <span className="skills__number">60%</span>
                            </div>

                            <div className="skills__bar">
                                <snap className="skills__percentage visualidad"></snap>
                            </div>
                            
                        </div>

                    </div>
                </div>
            </div>
            <AboutBox/>
        </section>
    );
};
export default About;