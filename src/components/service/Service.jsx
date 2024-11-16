import React from "react";
import "./service.css";
import Image1 from "../../assets/service-1.svg";
import Image2 from "../../assets/service-2.svg";

const data = [
    {
        id: 1,
        image: Image1,
        title:"UI/UX design",
        description: 
            "la parte visual tambien cuenta",     
    },
    {
        id: 2,
        image: Image2,
        title:"Web Development",
        description: 
            "el desarrollo es parte de una app funcional",  
    },
];
const Service = () =>{
    return(
        <section className="service container section" id = "service">

            <h2 className="section__title">Service</h2>

            <div className="service__container grid">
            {data.map(({id, image, title, description}) => {
                    return (
                        <div className="service__card" key={id}>
                            <img src={image} alt="" className="service__img" />

                            <h3 className="service__title">{title}</h3>
                            <p className="services__description">{description}</p>
                        </div>
                    );
                })}
            </div>

            <div className="entornos__usados">
                <a href="" className="react">
                    <i class="fa-brands fa-react"></i>
                </a>
                <a href="" className="node">
                    <i class="fa-brands fa-node"></i>
                </a>
                <a href="" className = "js">
                    <i class="fa-brands fa-square-js"></i>
                </a>
                <a href="" className="html">
                    <i class="fa-brands fa-html5"></i>
                </a>
                <a href="" className="css">
                    <i class="fa-brands fa-css3-alt"></i>
                </a>
            </div>
        </section>
    );
};
export default Service