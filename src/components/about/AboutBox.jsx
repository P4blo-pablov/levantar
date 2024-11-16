import React from "react";

const AboutBox = () => {
    return(
        <div className="about__boxes grid">
            <div className="about__box">

                <i class="about__icon fa-duotone fa-solid fa-fire"></i>

                <div className="about__title">
                    <h3 className="about__title">3</h3>
                    <span className="about__subtitle">Proyectos completos</span>
                </div>
            </div>

            <div className="about__box">

                <i class="about__icon fa-duotone fa-solid fa-mug-hot"></i>

                <div className="about__title">
                    <h3 className="about__title">250</h3>
                    <span className="about__subtitle">horas de trabajo</span>
                </div>
            </div>

            <div className="about__box">
                
                <i class="about__icon fa-duotone fa-solid fa-chart-line"></i>

                <div className="about__title">
                    <h3 className="about__title">1</h3>
                    <span className="about__subtitle">Cliente satisfecho</span>
                </div>
            </div>

        </div>
    );
};

export default AboutBox;