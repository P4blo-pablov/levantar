import React from "react";
import "./contact.css";

const Contact =() => {
    return (
        <section className="contact container section" id ='contact'>
            <h2 className="section__title">Contactame</h2>

            <div className="contact__container grid">
                <div className="contact__info">
                    <h3 className="contact__title">Hablemos un poco</h3>
                        <p className="contact__details">no me gustan los formularios envíame un correo electrónico</p>
                </div>

                <form action="" className="contact__form">
                    <div className="contact__form-group">
                        <div className="contact__form-div">
                            <input 
                                type="text" 
                                className="contact__form-input" 
                                placeholder ='Ingresa tu nombre'
                            />
                        </div>

                        <div className="contact__form-div">
                            <input 
                                type="email" 
                                className="contact__form-input" 
                                placeholder ='Ingresa tu email'
                            />
                        </div>
                    </div>

                    <div className="contact__form-div">
                        <input 
                            type="text" 
                            className="contact__form-input"
                            placeholder ='Asunto'
                        />
                    </div>
                    
                    <div className="contact__form-div contact__form-area">
                        <textarea 
                            name="" 
                            id="" 
                            cols="30" 
                            rows="10" 
                            className="contact__form-input" 
                            placeholder="Cuentame un poco mas"
                        ></textarea>
                    </div>

                    <button className="btn">Enviar</button>
                </form>
            </div>
        </section>
    )
}

export default Contact